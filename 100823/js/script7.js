var nome, departamento, sálario;

nome = prompt(" digite o seu nome; ");
departamento = prompt("digite seu departamento ");

if (departamento == "TI") {
    salario = prompt("digite seu salario mensal; R$ ");

     if (salario < 1500) {
     alert("voce recebera um aumento");

     } 
     else if (salario >= 1500 && salario <= 3000) {
     alert("não receberá um aumento ");
     }

     else {
     alert("voce esta demitido!"); 
     }
}
 else {
    alert("as politicas não se aplica");
}

