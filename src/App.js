
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Login from '../src/pages/Login'
import Register from './pages/Register';
import Products from '../src/pages/Product'
import About from './pages/About';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Header></Header>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
