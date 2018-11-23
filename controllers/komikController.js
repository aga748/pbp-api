const komik = require('../models').komik


module.exports = {
  fetchAll(req, res) {
    return komik
      .findAll()
      .then(result => res.status(200).send(result))
      .catch(err => res.status(400).send(err.errors.map(item => { return { error: item.message } })))
  },
  getKomik(req, res) {
    return komik
      .findAndCountAll({ where: { id: req.params.id } })
      .then(result => {
        (result.count !== 0)
        ? res.status(200).send(result.rows[0]) 
        : res.status(404).send({ error: 'data not found'})
      })
      .catch(err => res.status(400).send(err.errors.map(item => { return { error: item.message } })))
  },
  createKomik(req, res) {
    return komik
      .create({
        judul: req.body.judul,
        harga: req.body.harga,
        image: req.body.image,
        description: req.body.description,
        halaman: req.body.halaman,
        nama_pengarang: req.body.nama_pengarang,

      })
      .then(komik => res.status(200).send(komik))
      .catch(err => res.status(400).send(err.errors.map(item => { return { error: item.message } })))
  },
  updateKomik(req, res) {
    return komik
      .findAndCountAll({ where: { id: req.params.id } })
      .then(result => {

        if (result.count === 0) {
          return res.status(404).send({ error: 'data not found'})
        }

        let dataResult = result.rows[0]
        dataResult.update(req.body, { fields: ['judul', 'harga', 'imageKomik', 'description'] })
          .then(() => res.status(200).send(dataResult))
          .catch(err => res.status(400).send(err.errors.map(item => { return { error: item.message } })))
      })
      .catch(err => res.status(400).send(err.errors.map(item => { return { error: item.message } })))
  },
  deletekomik(req, res) {
    return komik
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