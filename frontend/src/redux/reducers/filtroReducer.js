
const initialState = {
    productos:[],
    usuario:{name:'', email:''},
    auxiliar:[]
}

const filtroReducer = (state = initialState, action)=>{

    switch(action.type){
        case 'fetch':
            return {
                ...state,
                productos: action.payload,
                auxiliar: action.payload,
            }
            
        case 'delete':
            return {
                ...state,
                productos: action.payload
            }

        case 'usuario':
            return {
                ...state,
                usuario: action.payload
            }

        case 'filtro':

            const filtrado = action.payload.productos.filter((product => product.name.toLowerCase().startsWith(action.payload.value.toLowerCase())))

            return {
                ...state,
                productos: filtrado
            }
        default:
            return state
    }


}
export default filtroReducer