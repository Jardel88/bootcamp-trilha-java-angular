package tiposDeDados;

public class TiposDeDados {
    public static void main(String[] args) {

        int numero;
        float decimalCurto;
        double decimalLongo;
        char caracter;
        String cadeiaDeCaracteres;
        boolean verdadeiroOufalso;

        numero = 10;
        decimalCurto = 10.5f;
        decimalLongo = 10.5;
        caracter = 'A';
        cadeiaDeCaracteres = "**Este texto é uma string**";
        verdadeiroOufalso = true;

        System.out.println(numero +", "+ decimalCurto +", "+ decimalLongo +", "+ caracter +", "+ cadeiaDeCaracteres
                        + ", " + verdadeiroOufalso);

    }
}
