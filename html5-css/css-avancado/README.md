## Introdução CSS

Cascading style sheet(css) é uma folha de estilos composta por camadas e utilizada para definir apresentação (aparencia) em paginas da internet adotam para seu desenvolvimento linguagens de marcação como xam, html, xhtml

## Pré-processadores CSS

CSS não possui dinamismo e a falta de dinamismo deixa nosso codigo extenso e repetitivo, existem linguagens intermediarias, os pré-processadores, que adicionam recursos para criar estilos com menos codigo são interpretadores de codigo que permitem gerar css a partir de um arquivo de outra sintaxe, conforme o pré-processador utilizado. Leem todo codigo gerado e o convertem para CSS(podendo ser minificado se assim estiver definido).

Possuem funcionalidades que não existe no CSS puro, como herança por exemplo.

exemplos de pré-processadores:

* less
* sass
* stylus
  
Eles tem semelhanças, logo vale identificar qual agrada mais e qual atende melhor a demanda.

### Vantagens

* A maioria permite criação de variaveis, condicionais, repetição, imports/extends, funções e mixins
* Facilitam a manutenção do codigo
* Permite um código mais limpo
* Códigos flexíeis e reutilizáveis
* Linguagem/estrutura de melhor entendimento para pessoas e"menos para a maquina"

### Desvantagens

* Aumento da complexidade do CSS puro
* Devido a este aumento de complexidade, aumenta também a chance de baixo desempenho
  
## Pré-processadores

#### Less

É um pré-processador CSS que amplia a capacidade do CSS e que compila mais rápido que outros pré-processadores, é baseado em javascript(não precisa conhecer a linguagem)

* Reduz redundância de código
* Usado por varias empresas e frameworks, como o bootstrap
* Permite o uso de variaveis, funções, calculos e hierarquia
  
Leia mais em <https://lesscss.org/>

instalação no nodejs: npm install less (Não obrigatório, funciona sem a instalação)

~~~

Arquivo html
<link rel="stylesheet/less" type="text/css" href="style.css">

A parte importante do link é o rel="stylesheet/less" onde faz a definição do processamento

href="stylesheet.css" pode ser também href="stylesheet.less"

~~~

Variáveis em less usa o @ em sua definição

exemplo: @cor

Ao invés de utilizar um determinado valor, você usa a variável com a referencia da cor, facilita a mudança de propriedades do CSS de forma mais dinâmica e rápida.

#### Hierarquia

ex:

~~~
 p{
  color: @cor;
  b{
    color: @cor2;
  }
  
 }
~~~

### Funções

Permite a manipulação de valores a partir de uma lista de funções predefinidas pelo less, permite transformar um valor em outro, manipular condicionais, fazer calculos e etc.

### Mixins

Usado quando há itens iguais em mais de um seletor e acaba usando a mesma estrutura de função, é como criar functions dentro do CSS, com passagem ou não de parâmetros, possibilita o uso de valores padrao e evita repetição.

### Operadores matemáticos

#### MATH

Ao fazer uma configuração, a definição de um estilo, você poderá fazer cálculos para definir padrões proporcionalidades, funciona também em cores.

opçoes + - * /

Devido as versões do less, algumas o / (Divisão) nao funciona a não ser que force o ./ que está obsoleto atualmente.

### SASS

SASS é uma extensão de CSS que empodera o CSS básico, é um pré processador assim como o less, permite o uso de variáveis, funções, calculos e hierarquia. É uma gem do ruby, ou seja, uma biblioteca escrita em ruby.

Leia mais em <https://sass-lang.com/>

#### Sintaxe

Para declaração de variavel se usa $ e nao @ como em outras linguagens

O .scss tem a sintaxe mais parecida com o css e o less

~~~
$cor: red;
.item{
  color: $cor;
}

~~~

O .sass é mais parecido com o pug, ou seja, sem abertura

~~~
$cor: red;
.item
  color: $cor;

~~~

Para funções usamos o @mixin para a declaração

~~~
@mixin fundoP($color) {
 background-color: $color;
}
~~~

Na chamada usamos o @include

~~~
.tipo{
  @include fundP($color);
}
~~~

É possivel fazer o uso de imports

~~~
@use 'base';
@import 'base'; , está em desuso

~~~

Ao contrario das importações de CSS simples, que exigem que o navegador faça várias solicitações http a medida que renderiza a pagina, aqui importa tudo de uma vez, visto que irá se retornar só um arquivo CSS

#### Operadores

~~~
<  <=  >  >=  ==   !=  para comparações

+  -  *  / para numeros

+ para concatenação

exemplos
1+2*3 == 1+(2*3) //true
true or false and false == true or (false and false) // true

((1+2)*3+4)*5; //65
~~~~

#### Repetição/looping/for

~~~

@for $i from 1 through 3 {
 $nome: 'tipo' + $i;
 #{$nome} {
   background-color: lighten($cor, $i * 5%);
 }
}

~~~

### Postcss

É um ecossistema de plugins personalizados e de ferramentas, pode ser usado com pré ou pós procesadores. Como pós-processador, voce nao tera muito controle do que sera feito diferente do que é feito no sass e no less.

css de origem -> postcss -> css de destino

exemplo:

~~~
entrada

p{
  display: flex
}

saida

p{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
~~~

É uma ferramenta para transformar css com javascript, no desenvolvimento podemos utilizar conceitos ja apresentados neste curso, visando evitar repetição de codigo.

#### Vantagens

Reuso, código limpo, organizado e de fácil manutenção

### Styles components

É uma biblioteca para react/react native que permite o uso de estilos a nivel de componentes é baseado em javascript com CSS.
Leia mais em <https://styled-components.com/docs>

#### Pricipais vantagens

* Evita erro de nome de classe
* Exclusão mais fácil de CSS: se excluir um componente não usado, todos seus estilos serão excluidos junto, além disso há ferramenta para detectar se o componente está ou não sendo utilizado.
* Fácil manutenção
* Injeta só os arquivos necessários, diminui a quantidade de codigo carregada
* Adaptação de estilo de componente é simples e intuitivo, sem precisar gerenciar vários arquivos, as vezes dezenas de classes

Instalação

yarn -> yarn add styled-components

npm -> npm install create-react-app
