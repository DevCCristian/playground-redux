import axios from 'axios';

const filtroActions = {
    
    fetchearProductos: () =>{
       return async(dispatch, getState) => {
            const res = await axios.get('http://localhost:4000/api/productos')
            // .then(res => dispatch({type:'fetch', payload:res.data.respuesta}))
            dispatch({type:'fetch', payload:res.data.respuesta})
       }
    },
    borrarProducto: (id)=>{
        return async(dispatch, getState) => {
            const res = await axios.delete('http://localhost:4000/api/productos/'+id)
            dispatch({type:'delete', payload:res.data.respuesta})
        }
    },
    cargarUsuario: (name,email)=>{
        return (dispatch, getState)=>{
            dispatch({type:'usuario', payload:{name,email}})
        }
    },
    filtrar: (productos, value)=>{
        return (dispatch,getState)=>{
            dispatch({type:'filtro', payload:{productos, value}})
        }
    }





}

export default filtroActions;