const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
  title: {
    type: String,
    required: true,
    trim:true
  },
  slug:{
    type: String,
    required: [true, 'O slug é obrigatório'],//adicionar mensagem de erro [a, '']
    trim:true,
    index:true,
    unique:true
  },
  description:{
    type: String,
    required: [true, 'A descrição é obrigatória'],
    trim:true
  },
  price:{
    type: Number,
    required:true
  },
  active:{
    type: Boolean,
    required: true,
    default: true
  },
  tags: [{
    type:String,
    required:true
  }]
})



module.exports = mongoose.model('Product', schema)