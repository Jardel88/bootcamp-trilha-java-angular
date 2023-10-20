import Carro from "./img/imagem5.jpg";
import styled from 'styled-components';

const Paragrafo = styled.p`
	margin-top: 15px;
	font-size: 15px;
`;

function Eletronicos() {

    return (

        <div class ="area-principal">
        <div class="area-postagens">
			<div class="postagem">
				<div>
					<h2>Carros</h2>
					<span class="data-postagem">postado 20 março 2022</span>
				</div>
				<img 
                    width="620px" src={Carro}
                    alt="Imagem do interir de uma ferrari" 
                    title='interior-ferrari'
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

export default Eletronicos

