package arrays;

import javax.swing.*;

public class TrabalhandoComArrays {
    public static void main(String[] args) {

        String [] paises = new String[4];
        int [] numeros = new int[10];
    /*
        for (int i = 0; i < 4; i++){
            paises[i] = JOptionPane.showInputDialog("Informe um país");
        }

        for (String listaPaises: paises){
            System.out.println(listaPaises);
        }
    */
        for (int i = 0; i < 10; i++){
            numeros[i] = Integer.parseInt(JOptionPane.showInputDialog("Informe um país"));
        }

        for (Integer listaNumeros: numeros){
            System.out.println(listaNumeros);
        }

        int novoValor = 11;
        numeros[8] = novoValor + 4;

        for (Integer listaNumeros: numeros){
            System.out.println(listaNumeros);
        }
    }
}
