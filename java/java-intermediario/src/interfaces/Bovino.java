package interfaces;

public class Bovino implements Animal{
    @Override
    public void animalSom() {
        System.out.println("Teste som");
    }

    @Override
    public void animalComer() {
        System.out.println("Teste comer");
    }

    @Override
    public void animalAbrigo() {
        System.out.println("Teste abrigo");
    }
}
