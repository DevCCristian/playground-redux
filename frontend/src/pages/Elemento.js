import React from 'react'
// import axios from 'axios'
import Header from '../components/Header'
// import {connect} from 'react-redux'

class Elemento extends React.Component {
    constructor(props) {
        super(props)
        // console.log(props)
    }

    state = {elemento:{name: this.props.params.name, precio:this.props.params.price}}
    // endpoint = this.props.params.endpoint
    // id = this.props.params.id

    componentDidMount() {
        // this.setState({elemento:this.props.productos.find(p => p._id === this.id)})
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

// const mapStateToProps = (state) =>{
//     return {
//         productos: state.productosReducer.productos
//     }
// }
 
// export default connect(mapStateToProps)(Elemento);
export default Elemento;