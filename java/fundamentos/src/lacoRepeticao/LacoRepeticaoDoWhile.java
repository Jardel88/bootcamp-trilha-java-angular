package lacoRepeticao;

public class LacoRepeticaoDoWhile {

    public static void main(String[] args) {

        int indice = 0;

        //Primeiro entra no laço de repetição e depois faz a validação
        do{
            System.out.println(indice);
            indice++;
        } while (indice <= 10);
        System.out.println(indice);
    }
}
