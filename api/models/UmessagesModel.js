const mongoose = require('mongoose')
const Schema = mongoose.Schema

const umessagesScheme = new Schema({
  firstname: {type: String, required: true},
  lastname: {type: String, required: true},
  companyname: {type: String, required: true},
  message: {type: String, required: true}
}, {timestamps: true})

module.exports = mongoose.model('Umessages', umessagesScheme)