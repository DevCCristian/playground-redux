const personas = [
    {name:'Juan', edad:'25',id:0},
    {name:'Maria', edad:'22',id:1},
    {name:'Pablo', edad:'28',id:2},
    {name:'Mercedes', edad:'24',id:3},
    {name:'Victoria', edad:'21',id:4},
]

const personasControllers = {

    obtenerTodasLasPersonas: (req,res)=>{
        res.json({respuesta:personas});
    },
    cargarUnaPersona: (req,res)=>{
        personas.push(req.body)
        console.log(personas)
        res.json({respuesta:personas});
    },
    obtenerUnaPersona: (req,res)=>{
        console.log(req.params)
        const id = req.params.id        
        const persona = personas.find(persona => persona.id.toString() === id)
        console.log(persona)
        
        res.json({respuesta:persona})

    }

}


module.exports = personasControllers;