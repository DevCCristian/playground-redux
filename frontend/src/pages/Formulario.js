import React from 'react';
import Header from "../components/Header";
import axios from "axios";
import Inputs from '../components/Inputs'
import {connect} from 'react-redux';
import filtroActions from '../redux/actions/filtroActions'

class Formulario extends React.Component {


    handleSubmit = async (name, email)=>{
        this.props.cargarUsuario(name,email)

    }

    render() { 
        console.log(this.props)
        return (
        <div className="container">
            <Header/>
            <main className="main-formulario">
                <Inputs handleSubmit={this.handleSubmit}/>
            </main>
        </div>);
    }
}
 
 const mapStateToProps = (state) =>{
     return {
        usuario: state.filtroReducer.usuario,
     }
 }
 const mapDispatchToProps = {
    cargarUsuario: filtroActions.cargarUsuario
 }

export default connect(mapStateToProps, mapDispatchToProps)(Formulario);