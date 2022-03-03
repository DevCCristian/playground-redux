import React from 'react'
// import axios from 'axios'
import Header from '../components/Header'
import {connect} from 'react-redux'

class Elemento extends React.Component {
    constructor(props) {
        super(props)
        // console.log(props)
    }

    state = {elemento:{}}
    id = this.props.params.id


    componentDidMount() {
        this.setState({elemento:this.props.productos.find(elemento => elemento._id === this.id)})
    }

    render() { 
        return (
        <div className="element">
            <Header/>
            <h1>{this.state.elemento.name}</h1>
            <h3>Precio: $ {this.state.elemento.precio}</h3>
        </div>)
    }
}

const mapStateToProps = (state) =>{
    return {
        productos: state.pepito.productos
    }
}
 
export default connect(mapStateToProps)(Elemento);

