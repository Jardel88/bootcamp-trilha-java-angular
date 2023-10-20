import { Link } from 'react-router-dom';

function Header() {

    return (
        <div class="area-cabecalho">		
            <div class="area-logo">
			    <h1>Tec<span class="branco">Blog</span></h1>
		    </div>
		    <div class="area-menu">
				<Link to="/">Home</Link>
			    <Link to="/celulares">Celulares</Link>
				<Link to="/carros">Carros</Link>
				<Link to="/informatica">Informatica</Link>
				<Link to="/jogos">Jogos</Link>
		    </div>
	    </div>
    )
}

export default Header