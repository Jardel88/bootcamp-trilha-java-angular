package operadores;

public class OperadoresLogicos {

    public static void main(String[] args) {

        String nome1 = "João";
        String nome2 = "João";
        int num1 = 10;
        int num2 = 2;

        if((nome1 != nome2) || (num1 > num2)){
            System.out.println("|| OU, se uma das condições for verdadeira.");
        } else {
            System.out.println("Nunhuma condição foi atendida");
        }

        if((nome1 == nome2) && (num1 > num2)){
            System.out.println("&& E, as duas condições precisam ser verdadeiras.");
        } else {
            System.out.println("Uma ou mais condições não foram atendidas");
        }
    }
}
