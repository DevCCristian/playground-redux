import React from 'react'
import axios from 'axios'
import Header from '../components/Header'
import {Link} from 'react-router-dom'
import Filtro from '../components/Filtro'
import { connect } from 'react-redux'
import filtroActions from '../redux/actions/filtroActions'

class Lista extends React.Component {
    state = {
        arrayRender:[]
    }
    
    componentDidMount() {
        // this.setState({arrayRender:this.props.productos})
        this.props.fetchearProductos()
    }

    cambiarLista = (endpoint)=>{

        if (!this.state[endpoint].length) {
            axios.get(`http://localhost:4000/api/${endpoint}`)
            .then(res => this.setState({[endpoint]:res.data.respuesta, arrayRender:res.data.respuesta}))
        }else{
            this.setState({arrayRender:this.state[endpoint]})
        }

    }
    handleDelete = (id)=>{
        this.props.borrarProducto(id)
        // try{
        //     const respuesta = await axios.delete('http://localhost:4000/api/productos/'+ id)
        //     this.setState({arrayRender: respuesta.data.respuesta})
        // }catch(error){
        //     console.log(error)
        // }
        
    }
    render() { 
        console.log(this.props)

        return (
        <div className="container">
            <Header/>
            <main className="main-home">
            <div className="contenedor-lista-btn">
                <Filtro filtrar={this.props.filtrar} productos={this.props.auxiliar}/>
                <div className="contenedor-listas">
                    <div className="lista">

                        { this.props.productos && this.props.productos.map((elemento) =>{
                               const endpoint = elemento.img ? 'animes' : elemento.precio ? 'productos' : 'personas'
                                return (
                                    <div key={elemento._id} className="contenedor-individual">
                                        <h3>{elemento.name}</h3>
                                        {elemento.edad && <h3>{elemento.edad}</h3> }
                                        {elemento.img && <div style={{backgroundImage: `url('${elemento.img}')`}} className="imagen"></div> }
                                        <Link to={`/${endpoint}/${elemento._id}`} className="boton" >Ver elemento</Link>
                                        <button onClick={()=>this.handleDelete(elemento._id)} className="boton" >ELIMINAR elemento</button>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
            </main>
        </div>);
    }
}
 
 const mapDispatchToProps = {
    fetchearProductos: filtroActions.fetchearProductos,
    borrarProducto: filtroActions.borrarProducto,
    filtrar: filtroActions.filtrar,
 }

 const mapStateToProps = (state) =>{
    return {
        productos: state.filtroReducer.productos,
        auxiliar: state.filtroReducer.auxiliar,
    }
 }

export default connect(mapStateToProps, mapDispatchToProps)(Lista);