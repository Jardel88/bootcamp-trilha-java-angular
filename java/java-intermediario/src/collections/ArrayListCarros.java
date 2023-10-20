package collections;

import javax.swing.*;
import java.util.ArrayList;

public class ArrayListCarros {

    public static void main(String[] args) {

        ArrayList<String> carros = new ArrayList<>();

        carros.add("KOMBI");
        carros.add("JAGUAR");
        carros.add("BMW");
        carros.add("MERCEDES");
        carros.add("FUSCA");
        carros.add("VECTRA");

        System.out.println(carros);

        //Substituir Fusca por Mitsubishi
        carros.set(4, "MITSUBISHI");
        System.out.println(carros);

        //Remover Vectra
        carros.remove("VECTRA");
        System.out.println(carros);

        carros.add(JOptionPane.showInputDialog("Informe a marca do carro"));
        System.out.println(carros);

        //Limpando array
        //carros.clear();
        //System.out.println(carros);

        //Verificar se o arrayList está vazio
        if (carros.isEmpty()){
            System.out.println("A lista está vazia");
        }

        if (carros.contains("BMW")){
            for (int i =0; i < carros.size(); i++){
                if ("BMW".equals(carros.get(i))) {
                    carros.set(i, "BUGATTI");
                    break;
                }
            }
        }else {
            System.out.println("Não encontrei");
        }
        System.out.println(carros);
    }
}
