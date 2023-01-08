const mongoose = require('mongoose')
const Product = mongoose.model('Product')


exports.get = () =>{
  return Product
  .find({
    active:true //somente produtos ativos
  }, 'title price slug') //trazer somente estas informacoes específicas dos produtos
}

exports.getBySlug = (slug) =>{
  return Product
      .findOne({//apenas um objeto, traz um array se n for dessa forma
      slug: slug,
      active:true //somente produtos ativos
    }, 'title description price slug tags') //trazer somente estas informacoes específicas dos produtos
}

exports.getById = (id) =>{
  return Product
    .findById(id)
}

exports.getByTag = (tag) =>{
  return Product
  .find({
    tags: tag,
    active: true
  }, 'title description price slug tags')
}


exports.create = (data) =>{
  var product = new Product(data)
  return product.save()
}

exports.update = (id, data) =>{
  return Product
    .findByIdAndUpdate(id, {
        $set:{
          title:data.title,
          description: data.description,
          slug: data.slug,
          price: data.price
        }
    })
}

exports.delete = (id) =>{
  return Product
    .findOneAndRemove(id)
}
