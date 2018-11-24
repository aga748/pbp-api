const user = require('../models').user

module.exports = {
  fetchAll(req, res) {
    return user
      .findAll()
      .then(result => res.status(200).send(result))
      .catch(err => res.status(400).send(err.errors.map(item => { return { error: item.message } })))
  },
  getUser(req, res) {
    return user
      .findAndCountAll({ where: { id: req.params.id } })
      .then(result => {
        (result.count !== 0)
        ? res.status(200).send(result.rows[0]) 
        : res.status(404).send({ error: 'data not found'})
      })
      .catch(err => res.status(400).send(err.errors.map(item => { return { error: item.message } })))
  },
  createUser(req, res) {
    return user
      .create({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        balance:  req.body.balance,
        imageUser: req.body.imageUser
      })
      .then(user => res.status(200).send(user))
      .catch(err => res.status(400).send(err.errors.map(item => { return { error: item.message } })))
  },
  loginUser(req,res) {
    return user
    .findOne({ where: { username: req.body.username} })
    .then(result => {
      (result.count !== 0)
      {
        var password = req.body.password;
        if (result.rows[0].password == password)
        {
           res.status(200).send(result.rows[0]) 
          
        }
        else
        {
          res.status(404).send({ error: 'data not found'})
        }  
      }
    })
    .catch(err => res.status(400).send(err.errors.map(item => { return { error: item.message } })))
  },
  updateUser(req, res) {
    return user
      .findAndCountAll({ where: { id: req.params.id } })
      .then(result => {

        if (result.count === 0) {
          return res.status(404).send({ error: 'data not found'})
        }

        let dataResult = result.rows[0]
        dataResult.update(req.body, { fields: ['name','imageUser'] })
          .then(() => res.status(200).send(dataResult))
          .catch(err => res.status(400).send(err.errors.map(item => { return { error: item.message } })))
      })
      .catch(err => res.status(400).send(err.errors.map(item => { return { error: item.message } })))
  },
  deleteUser(req, res) {
    return user
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