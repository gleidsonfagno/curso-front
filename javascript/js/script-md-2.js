function calcularMedia ( notas){

    let soma = 0;
    for ( c = 0; c < notas.length; c++){
        soma += notas[c];
    }

    media = soma / notas.length;

    return media;
}

let media; //escopo global

function aprovacao( notas){
    let media = calcularMedia( notas ); //escopo da funcao
    let condicao = media >= 7 ? "aprovado" : "reprovado";

    return "Media" + media + " resultado" + condicao;
}
// funcao recursiva

function contagemRegressiva(numero){
    console.log(numero);

    let proximoNumero = numero - 1;

    if (proximoNumero > 0)
    contagemRegressiva(proximoNumero);     
}

document.addEventListener("submit", function(evento){
    evento.preventDefault();
    evento.stopPropagation();

    let formulario = document.getElementById("formulario-01");

    let dados = new FormData(formulario);

    let objeto = {};

    let notas = [];

    for(let key of dados.keys()){
        objeto[key] = dados.get(key);

        notas.push(dados.get(key));
    }

    console.log()

    console.log(objeto);

    aprovacao( notas);

    document.getElementById("resultado").innerHTML = aprovacao(notas);

});