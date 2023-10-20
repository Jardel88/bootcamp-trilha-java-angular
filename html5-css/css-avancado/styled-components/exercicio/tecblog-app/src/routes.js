import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Jogos from './pages/Jogos';
import Celulares from './pages/Celulares';
import Carros from './pages/Carros';
import Informatica from './pages/Informatica';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function RoutesApp() {
    return(
        <BrowserRouter>
        <Header></Header>
            <Routes>
                <Route path='/' element={ <Home/> }/>
                <Route path='/celulares' element={ <Celulares/> }/>
                <Route path='/carros' element={ <Carros/> }/>
                <Route path='/informatica' element={ <Informatica/> }/>
                <Route path='/jogos' element={ <Jogos/> }/>
            </Routes>
            <Footer></Footer>
        </BrowserRouter>
    )
}

export default RoutesApp;
