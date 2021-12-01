import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

function Header(props) {
    return ( 
    <header>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/lista">Listas</Link>
            <Link to="/formulario">Formulario</Link>
        </nav>
        {props.usuario.name !== '' ? <h1>Bienvenido {props.usuario.name}</h1>: <h1>No estas logueado</h1>}
    </header> );
}
const mapStateToProps = (state) =>{
    return {
        usuario: state.filtroReducer.usuario
    }
} 

export default connect(mapStateToProps)(Header);