const mongoose = require('mongoose')

const accountlogSchema = new mongoose.Schema({
    "id": String,
    "reason": String,
    "time": String,
    "type": String,
    "value": String,
    "ps": String
})
accountlogSchema.statics.read =async function () {
  return await this.find()
}
accountlogSchema.statics.write =async function (data) {
    return await this.create(data)
  }
accountlogSchema.statics.delete =async function (id) {
    return await this.deleteMany ({id:id})
  }
const accountlog = mongoose.model('accountlog',accountlogSchema)

module.exports = accountlog