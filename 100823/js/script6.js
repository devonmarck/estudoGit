/* exercicios: declare uma variavel chamada número.
peça ao usuário que digite o valor do número.
utilize a estutura de decisão (if else) para verificar 
se o número digitando é maior que 50.
se for mais que 50, calcule a metade desse número 
e exiba na tela, se não for maior que 50, informe 
ao usuário que o número é invalido.*/

var numero;

 numero = prompt ("digite um numero ");
  if ( numero > 49 ){
     alert("aqui a metade de " + numero + " é;" + numero/2);
  }
   else {
    alert("O número é inválido!");
   }

