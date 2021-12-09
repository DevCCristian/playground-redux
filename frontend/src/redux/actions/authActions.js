const axios = require('axios')

const authActions = {

    registrarUsuario: (userName,password) =>{
        return async(dispatch, getState)=>{
            try {
                // eslint-disable-next-line
                const user = await axios.post('http://localhost:4000/api/auth/signUp',{userName,password})
                if(user.data.success && !user.data.error){
                    localStorage.setItem('token',user.data.response.token)
                    dispatch({type:'usuario', payload:{userName}})
                }else{
                    // alert(user.data.error)
                    console.error(user.data.response)
                    return {errores: [{message:user.data.error}]}
                }
            }catch(error){
                
            }
        }
    },
    iniciarSesion: (userName,password) => {
        return async(dispatch, getState)=>{
            try {
                const user = await axios.post('http://localhost:4000/api/auth/signIn',{userName, password})
                if(user.data.success && !user.data.error){
                    localStorage.setItem('token',user.data.response.token)
                    dispatch({type:'usuario', payload:{userName:user.data.response.userName}})
                }else{
                    console.log(user.data)
                    // alert(user.data.error)
                }
            }catch(error){
                console.error(error)
            }
        }
    }
}

module.exports = authActions