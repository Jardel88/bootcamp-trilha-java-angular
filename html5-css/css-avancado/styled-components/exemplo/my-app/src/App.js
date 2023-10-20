import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const Titulo = styled.h1`
  color: #31e636;
  `;

const Subtitulo = styled.h2`
  color: green;
  `;

const Artigo = styled.section`
  color: #9393e2;
  `;

const Titulo2 = styled.h1`
  color: blue;
  font-size: 25px;
  `;

  function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Titulo>Meu site</Titulo>
        <Subtitulo>Subtitulo</Subtitulo>
        <Artigo>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et scelerisque quam. 
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
          per inceptos himenaeos. Praesent nulla turpis, gravida at nunc eu, luctus aliquam justo. 
          Praesent eget risus vehicula
        </Artigo>
        <Titulo2>Segunda Parte</Titulo2>
        <Artigo>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et scelerisque quam. 
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
          per inceptos himenaeos. Praesent nulla turpis, gravida at nunc eu, luctus aliquam justo. 
          Praesent eget risus vehicula
        </Artigo>
      </header>
    </div>
  );
}

export default App;
