// import {useEffect, useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import axios from 'axios'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home'
import Lista from './pages/Lista'
import Formulario from './pages/Formulario'

import ElementoSinProps from './pages/Elemento'
import {withRouter} from './utils/withRouter'

// import {connect} from 'react-redux';

const Elemento = withRouter(ElementoSinProps)

const App = (props)=> {
  
  
  console.log(props)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lista" element={<Lista />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/productos/:id" element={<Elemento />} />
        <Route path="*" element={<Home/>}/>
      </Routes>
      <ToastContainer
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />

    </BrowserRouter>
  );
}

// const mapStateToProps = (state) =>{
//   return{
//     usuario: state.authReducer.usuario
//   }
// }

// export default connect(mapStateToProps)(App);
export default App;
