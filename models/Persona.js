const mongoose = require('mongoose');

const personaSchema = new mongoose.Schema({
    name: { type: String, required: true },
    edad: {type: Number, default: 0} ,
})

const Persona = mongoose.model('persona', personaSchema)

module.exports = Persona;