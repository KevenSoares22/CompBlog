
import java.util.Scanner;


public class ContaBancaria{
    private String nomeBanco;
    private String numeroConta;
    private double saldoDisponivel;
    private boolean temEmprestimo;
    private String converteBool;
    
    public ContaBancaria(){
        this.nomeBanco = "";
        this.numeroConta = "";
        this.saldoDisponivel = 0.0;
        this.temEmprestimo = false;
        this.converteBool = "";
        
        
        
    }
    
    public ContaBancaria(String nomeBanco, String numeroConta, double saldoDisponivel, boolean temEmprestimo, String converteBool, double valorDeposito){
        this.nomeBanco = nomeBanco;
        this.numeroConta = numeroConta;
        this.saldoDisponivel = saldoDisponivel;
        this.temEmprestimo = temEmprestimo;
        this.converteBool = converteBool;
        
        
        
    }
    
    
    
    public void preencher(){
        
        Scanner read = new Scanner(System.in);
        
        
        ePrint("Limpar");
        
        
        System.out.print("Digite o nome do banco: ");
        this.nomeBanco = read.next();
    
        System.out.print("Digite o numero da conta: ");
        this.numeroConta = read.next();
        
        System.out.print("Digite o saldo: ");
        this.saldoDisponivel = read.nextDouble();
        
        
        System.out.print("Possui emprestimo? (Sim / Nao): ");
        this.converteBool = read.next();
        
        
        if(this.converteBool.toLowerCase().charAt(0) == 's' ){
            
            
            
            this.converteBool = "Sim";
            this.temEmprestimo = true;
        }
        
    
        ePrint("Nao Limpar");
        
    }
    
    public void imprimir(){
        ePrint("Limpar");
        System.out.println("Banco: " + this.nomeBanco);
        System.out.println("Conta: " + this.numeroConta);
        System.out.println("Saldo: R$" + this.saldoDisponivel);
        System.out.println("Possui emprestimo: " + this.converteBool);
        
        ePrint("Nao Limpar");
        
    }
    
    public void copiar(ContaBancaria outra){
        this.nomeBanco = outra.nomeBanco;
        this.numeroConta = outra.numeroConta;
        this.saldoDisponivel = outra.saldoDisponivel;
        this.converteBool = outra.converteBool;
        this.temEmprestimo = outra.temEmprestimo;
        
        
        
    }
    public void depositar(double valorDeposito){
    this.saldoDisponivel += valorDeposito;



    }
    public void ePrint(String limpar){
        
        
        if(limpar.toLowerCase().equals("limpar")){
            for(int i=0; i<4; i++){
            System.out.println("");                
            }
        }
        
        System.out.println("<--------------------------------->");
        
    }
    public boolean getTemEmprestimo(){
        return this.temEmprestimo;
        
        
        
    }
    public String getNumeroConta(){
        
        return this.numeroConta;
        
        
    }

    public String getNomeBanco(){

        return this.nomeBanco;


    }


}