import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {

  nome = "Teste";
  dataNascimento = "1995-01-01";
  urlImagem = "/assets/placeholder.jpg";

  mostrarDataNascimento(){
    alert(`A data de nascimento é ${this.dataNascimento}`);
  }
}
