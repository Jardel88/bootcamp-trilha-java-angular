import Jogos1 from "./img/imagem2.jpg";
import styled from 'styled-components';

const Paragrafo = styled.p`
	margin-top: 15px;
	font-size: 15px;
`;

function Jogos() {

    return (

        <div class ="area-principal">
        <div class="area-postagens">
			<div class="postagem">
				<div class="borda">
					<h2>Jogos</h2>
					<span class="data-postagem">postado 20 março 2022</span>
				</div>
				<img 
                    width="620px" src={Jogos1}
                    alt="Imagem de um monitor, laptop e tablet em cima da mesa"
                    title='monitor-laptop-tablet'
                    />
				<Paragrafo>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et scelerisque quam. 
					Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
					Praesent nulla turpis, gravida at nunc eu, luctus aliquam justo. Praesent eget risus vehicula
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et scelerisque quam. 
					Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
					Praesent nulla turpis, gravida at nunc eu, luctus aliquam justo. Praesent eget risus vehicula
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et scelerisque quam. 
					Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
					Praesent nulla turpis, gravida at nunc eu, luctus aliquam justo. Praesent eget risus vehicula
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et scelerisque quam. 
					Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
					Praesent nulla turpis, gravida at nunc eu, luctus aliquam justo. Praesent eget risus vehicula
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et scelerisque quam. 
					Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
					Praesent nulla turpis, gravida at nunc eu, luctus aliquam justo. Praesent eget risus vehicula
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et scelerisque quam. 
					Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
					Praesent nulla turpis, gravida at nunc eu, luctus aliquam justo. Praesent eget risus vehicula
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et scelerisque quam. 
					Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
					Praesent nulla turpis, gravida at nunc eu, luctus aliquam justo. Praesent eget risus vehicula
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et scelerisque quam. 
					Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
					Praesent nulla turpis, gravida at nunc eu, luctus aliquam justo. Praesent eget risus vehicula
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et scelerisque quam. 
					Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
					Praesent nulla turpis, gravida at nunc eu, luctus aliquam justo. Praesent eget risus vehicula
				</Paragrafo>
			</div>
		</div>
        </div>
       
    )
}

export default Jogos

