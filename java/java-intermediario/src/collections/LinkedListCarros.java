package collections;

import java.util.LinkedList;

public class LinkedListCarros {

    public static void main(String[] args) {

        LinkedList<String> carros = new LinkedList<>();
        carros.add("Volvo");
        carros.add("BMW");
        carros.add("Ford");

        carros.addFirst("Mazda");
        System.out.println(carros);

        carros.addLast("Bugatti");
        System.out.println(carros);

        String carro = carros.get(3);
        System.out.println(carro);

        carros.removeFirst();
        System.out.println(carros);

        carros.removeLast();
        System.out.println(carros);

        System.out.println(carros.getFirst());

        System.out.println(carros.getLast());
    }
}
