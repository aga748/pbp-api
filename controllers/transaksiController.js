const transaksi = require('../models').transaksi


module.exports = {
  fetchAll(req, res) {
    return transaksi
      .findAll()
      .then(result => res.status(200).send(result))
      .catch(err => res.status(400).send(err.errors.map(item => { return { error: item.message } })))
  },
  getTransaksi(req, res) {
    return transaksi
      .findAndCountAll({ where: { id: req.params.id } })
      .then(result => {
        (result.count !== 0)
        ? res.status(200).send(result.rows[0]) 
        : res.status(404).send({ error: 'data not found'})
      })
      .catch(err => res.status(400).send(err.errors.map(item => { return { error: item.message } })))
  },
  createTransaksi(req, res) {
    return transaksi
      .create({
        id_user: req.body.id_user,
        name: req.body.name,
        judul_komik: req.body.judul_komik,
        harga: req.body.harga
      })
      .then(transaksi => res.status(200).send(transaksi))
      .catch(err => res.status(400).send(err.errors.map(item => { return { error: item.message } })))
  },
  updateTransaksi(req, res) {
    return transaksi
      .findAndCountAll({ where: { id: req.params.id } })
      .then(result => {

        if (result.count === 0) {
          return res.status(404).send({ error: 'data not found'})
        }

        let dataResult = result.rows[0]
        dataResult.update(req.body, { fields: ['id_user', 'name', 'judul_komik', 'harga'] })
          .then(() => res.status(200).send(dataResult))
          .catch(err => res.status(400).send(err.errors.map(item => { return { error: item.message } })))
      })
      .catch(err => res.status(400).send(err.errors.map(item => { return { error: item.message } })))
  },
  deleteTransaksi(req, res) {
    return transaksi
      .findAndCountAll({ where: { id: req.params.id }})
      .then(result => {
        if (result.count === 0) {
          return res.status(404).send({ error: 'data not found'})
        }

        let dataResult = result.rows[0]
        dataResult.destroy()
          .then(() => res.status(200).send({}))
          .catch(err => res.status(400).send(err.errors.map(item => { return { error: item.message } })))
      })
      .catch(err => res.status(400).send(err.errors.map(item => { return { error: item.message } })))
  }
}