const Router = require('express').Router();
const productosControllers = require('../controllers/productosControllers')
const { obtenerProductos, cargarUnProducto, obtenerUnProducto, borrarUnProducto, modificarProducto } = productosControllers


Router.route('/productos')
.get(obtenerProductos)
.post(cargarUnProducto)

Router.route('/productos/:id')
.get(obtenerUnProducto)
.delete(borrarUnProducto)
.put(modificarProducto)


module.exports = Router