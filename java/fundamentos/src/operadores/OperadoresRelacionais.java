package operadores;

public class OperadoresRelacionais {

    public static void main(String[] args) {
        int num1, num2;
        boolean res;

        num1 = 10;
        num2 = 10;

        //Igual
        res = num1 == num2;
        System.out.println(res);

        //Maior
        res = num1 > num2;
        System.out.println(res);

        //Menor
        res = num1 < num2;
        System.out.println(res);

        //Maior ou igual
        res = num1 >= num2;
        System.out.println(res);

        //Menor ou igual
        res = num1 <= num2;
        System.out.println(res);

        //Diferente
        res = num1 != num2;
        System.out.println(res);
    }
}
