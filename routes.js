const userController = require('./controllers/userController')
const komikController = require('./controllers/komikController')
const transaksiController = require('./controllers/transaksiController')

module.exports = function(app) {
    app.get('/user', userController.fetchAll)
    app.get('/user/:id', userController.getUser)
    app.post('/user/', userController.createUser)
    app.patch('/user/:id', userController.updateUser)
    app.delete('/user/:id', userController.deleteUser)

    app.get('/komik/', komikController.fetchAll)
    app.get('/komik/:id', komikController.getKomik)
    app.post('/komik/create/', komikController.createKomik)
    app.patch('/komik/:id', komikController.updateKomik)
    app.delete('/komik/:id', komikController.deleteKomik)

    app.get('/transaksi/', transaksiController.fetchAll)
    app.get('/transaksi/:id', transaksiController.getTransaksi)
    app.post('/transaksi/create/', transaksiController.createTransaksi)
    app.patch('/transaksi/:id', transaksiController.updateTransaksi)
    app.delete('/transaksi/:id', transaksiController.deleteTransaksi)
}