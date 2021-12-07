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
    filtrar: (productos, value)=>{
        return (dispatch,getState)=>{
            dispatch({type:'filtro', payload:{productos, value}})
        }
    },
    cargarProducto: (name,precio)=>{
        return async(dispatch,getState)=>{
            const respuesta = await axios.post('http://localhost:4000/api/productos',{name,precio})
            dispatch({type:'cargarProducto', payload:respuesta.data.respuesta})
        }
    }





}

export default filtroActions;