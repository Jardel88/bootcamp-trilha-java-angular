import React from 'react';
import ImgPostagem1 from "./img/imagem1.jpg";
import ImgPostagem2 from "./img/imagem2.jpg";

function Home() {

    return (
        <div class ="area-principal">
        <div class="area-postagens">
			<div class="postagem">
				<div class="borda">
					<h2>Titulo da postagem 1</h2>
					<span class="data-postagem">postado 20 março 2022</span>
				</div>
				<img 
                    width="620px" src={ImgPostagem1} 
                    alt="Imagem de um laptop e xícara de café vista de cima" 
                    title='laptop-e-xicara-cafe'
                    />
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et scelerisque quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent nulla turpis, gravida at nunc eu, luctus aliquam justo. Praesent eget risus vehicula
				</p>
			</div>
			<div class="postagem">
				<h2>Titulo da postagem 2</h2>
				<span class="data-postagem">postado 10 março 2022</span>
				<img width="620px" src={ImgPostagem2} 
                    alt="Imagem de um monitor, laptop e tablet em cima da mesa"
                    title='monitor-laptop-tablet'
                    />
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et scelerisque quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent nulla turpis, gravida at nunc eu, luctus aliquam justo. Praesent eget risus vehicula
				</p>
			</div>
		</div>
        </div>
    )
}

export default Home