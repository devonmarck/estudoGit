/*scriptpara o cálculo de operaçoes matematicas 

  -soma
  -subtração
  -multiplicação
  -divisão
  -resto  

  será necessario criar duas variaveis para que elas recebem os valores 
  que o usuario digitar*/
var numero1, numero2

/* para obter o numero digitada pelo usario usarmos o comando  prompt (que é um imput para dados) */

numero1 = prompt("digite um numero");
numero2 = prompt("digite outro numero");

/*o sinal de adição no javascript tanto é capaz de COMENTAR os elementos como tambem consegue 
SOMÁ-LOS desde  de que as variaveis  seja números como por padrão o comando prompt () recebe os valores 
digitados pelo usario como string, é NECESSARIO converter o tipo de  destas variaveis para number, porque 
se isso não for efeito, o sinal de adição irá contatenar e não somar   
*/
var soma = parseInt(numero1) + parseInt(numero2);
var subtração = numero1 - numero2;
var multiplicação = numero1 * numero2;
var divisão = numero1 + numero2;
var resto = numero1 % numero2

alert("O resultado das operações são: \n" +
  " soma:" + soma +
"\n O resultado da subtração é " + subtração +
"\n O resultado da soma é" + soma +
"\n O resultado da subtração é " + subtração +
"\n O resultado da multipicação é" + multiplicação +
"\n O resultdo da divisão é " + divisão +
"\nresto" + resto);