import React from 'react'
import axios from 'axios'
import Header from '../components/Header'
import {Link} from 'react-router-dom'
import Filtro from '../components/Filtro'
import { connect } from 'react-redux'
import productosActions from '../redux/actions/productosActions'

class Lista extends React.Component {
    state = {
        arrayProductos:[]
    }
    componentDidMount() {
        // this.props.fetchearProductos()

        // const fetchearProductos = async() => {
        //     const res = await axios.get('http://localhost:4000/api/productos')
        //     this.setState({arrayProductos:res.data.respuesta})
        // }
        // fetchearProductos()

        console.log("Estoy en componentDidMount")

        if (this.props.productos.length < 1) {
            this.props.fetchearProductos()
            console.log("Hice el pedido")
        }

    }

    handleDelete = (id)=>{
        this.props.borrarProducto(id)
        console.log("borrar ID: "+id)
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
                        // { this.state.arrayProductos && this.state.arrayProductos.map((elemento) =>{
                                return (
                                    <div key={elemento._id} className="contenedor-individual">
                                        <h3>{elemento.name}</h3>
                                        <Link to={`/productos/${elemento._id}`} className="boton" >Ver elemento</Link>
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
    fetchearProductos: productosActions.fetchearProductos,
    borrarProducto: productosActions.borrarProducto,
    filtrar: productosActions.filtrar,
 }

 const mapStateToProps = (state) =>{
    return {
        productos: state.pepito.productos,
        auxiliar: state.pepito.auxiliar,
    }
 }


export default connect(mapStateToProps, mapDispatchToProps)(Lista);