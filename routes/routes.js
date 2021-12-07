const Router = require('express').Router();
const productosControllers = require('../controllers/productosControllers')
const authControllers = require('../controllers/personasControllers')
const validator = require('../config/validator')
const { obtenerProductos, cargarUnProducto, obtenerUnProducto, borrarUnProducto, modificarProducto } = productosControllers
const { nuevoUsuario, accederACuenta } = authControllers

Router.route('/productos')
.get(obtenerProductos)
.post(cargarUnProducto)
// .put(modificarProducto)

Router.route('/productos/:id')
.get(obtenerUnProducto)
.delete(borrarUnProducto)
.put(modificarProducto)

Router.route('/auth/signUp')
.post(validator, nuevoUsuario)

Router.route('/auth/signIn')
.post(accederACuenta)
module.exports = Router