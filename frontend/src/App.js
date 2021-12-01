import {useEffect, useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Lista from './pages/Lista'
import Formulario from './pages/Formulario'
import ElementoSinProps from './pages/Elemento'
import {withRouter} from './utils/withRouter'
import axios from 'axios'

const Elemento = withRouter(ElementoSinProps)

const App = ()=> {
  const [state, setState] = useState({})

  // useEffect(()=>{
  //   axios.get('http://localhost:4000/api/productos')
  //   .then(res => setState({productos:res.data.respuesta}))
  // },[])
  
  // if (!state.productos) {
  //   return <div style={{backgroundImage:'url(https://www.gifimages.pics/images/quotes/english/general/gif-for-loader-52650-148855.gif)',width:'100vw',height:'100vh', backgroundSize:'cover',backgroundRepeat:'no-repeat'}}></div>
  // }
  
  const filtrar = (e)=>{
    

  }
  console.log(state)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lista" element={<Lista />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/:endpoint/:id" element={<Elemento />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
