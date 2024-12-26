const mongoose = require('mongoose')

async function account(acion) {
    await mongoose.connect('mongodb://127.0.0.1:27017/account')
    // await acion()
    // mongoose.disconnect()
}

module.exports = account