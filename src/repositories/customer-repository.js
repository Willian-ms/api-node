const mongoose = require('mongoose')
const Customer = mongoose.model('Customer')

exports.create = async(data) =>{
  var customer = new Customer(data)
  await customer.save()
}

exports.get = async(data) =>{
  var res = await Customer.find({})
  return res
}