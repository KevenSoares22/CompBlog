
import java.util.Scanner;
import java.util.List;
import java.util.ArrayList;



public class Cliente{
    private String nomeCliente;
    private String CPF;
    private List<ContaBancaria> conta;
    
    public Cliente(){
        this.nomeCliente = "";
        this.CPF = "";
        this.conta = new ArrayList<>();
        
        
        
    }
    
    public Cliente(String nomeCliente, String CPF){
        this.nomeCliente = nomeCliente;
        this.CPF = CPF;
        this.conta = new ArrayList<>();
        
        
        
    }
    
    
    
    public void preencher(){
        
        Scanner read = new Scanner(System.in);
        
        
        ePrint("Limpar");
        
        
        System.out.print("Digite o nome do Cliente: ");
        this.nomeCliente = read.next();
    
        System.out.print("Digite o CPF: ");
        this.CPF = read.next();
        
        
        String repeat = "s";
        do{
          ContaBancaria conta = new ContaBancaria();
          conta.preencher();
          this.getListaContas().add(conta);
          System.out.print("Deseja inserir mais uma conta? (S/N)");
          repeat = read.next();



        }while(repeat.toLowerCase().equals("s"));
    
        ePrint("Nao Limpar");
        
    }
    
    public void imprimir(){
        ePrint("Limpar");
        System.out.println("Cliente: " + this.nomeCliente);
        System.out.println("CPF: " + this.CPF);
        
        
        
        for(int i=0; i<=getListaContas().size() - 1; i++){
            ContaBancaria contaI = this.getListaContas().get(i);
            contaI.imprimir();
            
            
            
        }


        
        ePrint("Nao Limpar");
        
    }
    

    public void ePrint(String limpar){
        
        
        if(limpar.toLowerCase().equals("limpar")){
            for(int i=0; i<4; i++){
            System.out.println("");                
            }
        }
        
        System.out.println("<--------------------------------->");
        
    }



    public void depositarNaConta(){
        Scanner read = new Scanner(System.in);



        System.out.print("Digite o nome do banco: ");
        String nomeDoBanco = read.next();



        System.out.print("Digite o numero da conta: ");
        String numeroConta = read.next();



        System.out.print("Digite o valor a ser depositado: ");
        double valorDeposito = read.nextDouble();

        for(ContaBancaria c : conta){

           if(c.getNomeBanco().equals(nomeDoBanco)){
                
                
                
                        if(c.getNumeroConta().equals(numeroConta)){
        c.depositar(valorDeposito);
        System.out.println("Deposito realizado com sucesso.");
        return;
       }}

        }
        System.out.println("Conta nao encontrada.");



    }
    public List<ContaBancaria> getListaContas(){
        return conta;
        
        
        
    }
    
}