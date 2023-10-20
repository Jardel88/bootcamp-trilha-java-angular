package estruturasCondicionais;

public class EstruturaCondicional {

    public static void main(String[] args) {

        int num1 = 10;
        int num2 = 10;

        System.out.println("____________Estrutura condicional simples______________");
        if((num1 > num2)){
            System.out.println("Maior");
        } else {
            System.out.println("Igual");
        }

        System.out.println("____________Estrutura condicional composta______________");
        if((num1 > num2)){
            System.out.println("Maior");
        } else if(num1< num2){
            System.out.println("Menor");
        } else {
            System.out.println("Igual");
        }

        System.out.println("____________Estrutura escolha switch______________");
        int opçao = 1;
        switch (opçao){
            case 1:{
                System.out.println("Inclusão");
                break;
            }
            case 2:{
                System.out.println("Alteração");
                break;
            }
            case 3:{
                System.out.println("Consulta");
                break;
            }
            case 4:{
                System.out.println("Exclusão");
                break;
            }
            default:
                System.out.println("Opção inválida: "+ opçao + " redigite");
        }
    }
}
