//Declaração de variaveis para saber se a pessoa tem meia entrada;
//Entrada de dados

let idade = Number(prompt("Insira sua idade:"));
let idoso = prompt("É idoso? (sim ou não)");
let professor = prompt("É professor? (sim ou não)");

//Condição com OU "||"
if (idade >=60 || idoso === "sim" || professor === "sim") {
    alert("Você tem meia entrada pae");
} else{
        alert("Vai pagar interira paizão");
}