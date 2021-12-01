const Router = require('express').Router();
const personasControllers = require('../controllers/personasControllers')
const productosControllers = require('../controllers/productosControllers')
const animesControllers = require('../controllers/animesControllers')

const {obtenerTodasLasPersonas, cargarUnaPersona, obtenerUnaPersona} = personasControllers
const { obtenerProductos, cargarUnProducto, obtenerUnProducto, borrarUnProducto, modificarProducto } = productosControllers
const { obtenerTodosLosAnimes, cargarUnAnime, obtenerUnAnime } = animesControllers


Router.route('/personas')
.get(obtenerTodasLasPersonas)
.post(cargarUnaPersona) 

Router.route('/personas/:id')
.get(obtenerUnaPersona)

Router.route('/productos')
.get(obtenerProductos)
.post(cargarUnProducto)
// .put(modificarProducto)

Router.route('/productos/:id')
.get(obtenerUnProducto)
.delete(borrarUnProducto)
.put(modificarProducto)

Router.route('/animes')
.get(obtenerTodosLosAnimes)
.post(cargarUnAnime)
Router.route('/animes/:id')
.get(obtenerUnAnime)


module.exports = Router