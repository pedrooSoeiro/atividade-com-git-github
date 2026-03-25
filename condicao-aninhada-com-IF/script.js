//Declaração de variaveis para saber se a pessoa tem meia entrada;
//Entrada de dados

let renda = Number(prompt("Digite sua renda paizão:"));

if(!isNaN(renda)){
    if (renda>=3000){
        let nomeLimpo = prompt("Nome limpo (sim ou não)");
        if (nomeLimpo === "sim"){
            alert("Financiamento aprovado!");
        } else {
            alert("Nome negativado")
        }
    } else {
        alert("Renda insuficiente")
    }
}
