package costrutores;

public class Main {
    public static void main(String[] args) {

        Aluno aluno = new Aluno(0, 8, 8);

        double mediaAlunoFinal = aluno.calcularMediaAluno();

        if(mediaAlunoFinal < 6){
            aluno.situacaoAluno = Aluno.STATUS.REPROVADO;
        } else {
            aluno.situacaoAluno = Aluno.STATUS.APROVADO;
        }

        aluno.situacaoMatricula = Aluno.MATRICULA.MATRICULADO;

        System.out.println("A media final do aluno é: "+ aluno.calcularMediaAluno() +
                " e o alunoo está "+ aluno.situacaoAluno + ", matricula: " + aluno.situacaoMatricula);


    }
}
