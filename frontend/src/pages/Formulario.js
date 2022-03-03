import React from 'react';
import Header from "../components/Header";
import Inputs from '../components/Inputs'
import {connect} from 'react-redux';
import productosActions from '../redux/actions/productosActions'

class Formulario extends React.Component {


    handleSubmit = async (name, precio)=>{
        this.props.cargarProducto(name,precio)
        console.log("Nombre: "+name)
        console.log("Precio: "+precio)
    }

    render() { 
        return (
        <div className="container">
            <Header/>
            <h1 style={{width:'100%',textAlign:'center'}}>Cargar Productos</h1>
            <main className="main-formulario">
                <Inputs handleSubmit={this.handleSubmit}/>
            </main>
        </div>);
    }
}
 
 const mapDispatchToProps = {
    cargarProducto: productosActions.cargarProducto
 }

export default connect(null, mapDispatchToProps)(Formulario);
// export default Formulario;