const productos = require('../data/productos.json')
const tutoriales = require('../data/tutoriales.json')

module.exports ={
    index: function(req, res, next) {
        res.render('home/index', {productos, tutoriales});
      },
}