import {Link} from 'react-router-dom';
// import {connect} from 'react-redux';

function Header(props) {
    return ( 
    <header>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/lista">Listas</Link>
            <Link to="/formulario">Formulario</Link>

        </nav>
    </header> );
}
// const mapStateToProps = (state) =>{
//     return {
//         usuario: state.authReducer.usuario
//     }
// } 
// const mapDispatchToProps = {
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Header);
export default Header;