package exercicio06;
import classes.Cliente;
import classes.ContaBancaria;


public class Main
{
	public static void main(String[] args) {
		Cliente c1 = new Cliente();
		c1.preencher();
        c1.imprimir();
	    c1.depositarNaConta();
		c1.imprimir();
	}
}
