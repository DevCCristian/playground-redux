import {useRef, useState} from 'react'

function Inputs({handleSubmit}) {
    const inputNombre = useRef()
    const inputPrecio = useRef()
    
    const handleSubmitInputs = (e)=>{
        e.preventDefault()

        handleSubmit(inputNombre.current.value, inputPrecio.current.value)
        inputNombre.current.value = ''
        inputPrecio.current.value = ''
    }


    return ( <form onSubmit={handleSubmitInputs}>
                    <label>Nombre del producto:
                        <input className='input' type="text" ref={inputNombre} name="name"/>
                    </label>
                    <label> Precio del producto:
                        <input className='input' type="text" ref={inputPrecio} name="precio"/>
                    </label>
                    <input type="submit" value="Enviar"/>
                </form>);
}

export default Inputs;