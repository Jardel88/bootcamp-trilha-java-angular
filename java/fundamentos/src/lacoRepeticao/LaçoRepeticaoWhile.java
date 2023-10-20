package lacoRepeticao;

public class LaçoRepeticaoWhile {

    public static void main(String[] args) {

        int indice1 = 5;
        int indice2 = 5;
        int indice3 = 0;

        //Primeiro valida e depois entra no laço de repetição

        //Incremento
        while (indice1 < 10){
            System.out.println(indice1);
            indice1++;
        }
        System.out.println("________________________________");
        //Incremento
        while (indice2 > 0){
            System.out.println(indice2);
            indice2--;
        }
        System.out.println("________________________________");
        //Variação índice
        while (indice3 < 10){
            System.out.println(indice3);
            indice3 +=2;
        }
    }
}
