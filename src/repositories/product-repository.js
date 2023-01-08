const mongoose = require('mongoose')
const Product = mongoose.model('Product')


exports.get = async() =>{
  var res = await Product.find({
    active:true //somente produtos ativos
  }, 'title price slug') //trazer somente estas informacoes específicas dos produtos
  return res
}

exports.getBySlug = async(slug) =>{
  var res =  await Product.findOne({//apenas um objeto, traz um array se n for dessa forma
      slug: slug,
      active:true //somente produtos ativos
    }, 'title description price slug tags') //trazer somente estas informacoes específicas dos produtos
  return res  
  }

exports.getById = async(id) =>{
  var res = await Product
    .findById(id)
  return res
  }

exports.getByTag = async(tag) =>{
  var res = await Product
  .find({
    tags: tag,
    active: true
  }, 'title description price slug tags')
  return res
}


exports.create = async(data) =>{
  var product = new Product(data)
  await product.save()
}

exports.update = async(id, data) =>{
  await Product
    .findByIdAndUpdate(id, {
        $set:{
          title:data.title,
          description: data.description,
          slug: data.slug,
          price: data.price
        }
    })
}

exports.delete = async(id) =>{
  await Product
    .findOneAndRemove(id)
}
