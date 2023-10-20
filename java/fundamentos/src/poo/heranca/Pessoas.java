package poo.heranca;

public class Pessoas {

    public static void main(String[] args) {

        Fisica fis = new Fisica();
        fis.nome = "Joao";
        fis.cpf = "11111111";
        fis.identidade = "11111111";
        fis.situacaoPessoa = "A";

        Juridica jur = new Juridica();
        jur.cnpj = "11111111";
        jur.nome = "Casas Joao";
        jur.inscEstadual = "11111111";
        jur.situacaoPessoa = "I";

        System.out.println("Dados pessoa Juridica");
        System.out.println(jur.toString());
        System.out.println("Dados pessoa Fisica");
        System.out.println(fis.toString());
    }
}
