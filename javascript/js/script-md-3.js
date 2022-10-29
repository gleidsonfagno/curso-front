document.getElementById("formulario-01").addEventListener("submit", function(evento){
    
    evento.preventDefault();
    evento.stopPropagation();

    let dados = new FormData(this);


    let notas = [];

    for(let key of dados.keys()) {

        let numero = dados.get(key).match(/\d/) ? Number(dados.get(key)) : 0; //nomero
        //adicionar intens no array
        
        if(!isNaN(numero));{
            notas.push(numero);
        }
    }

    console.log(notas);

    texto = (notas)

    document.getElementById("resultado").innerHTML = texto;
});

document.querySelector("input").addEventListener('focusout', function(event){
    event.preventDefault;

    if(this.value == " "){

        document.querySelector('.mesagem').innerHTML = "verifique os dados";
        thid.style.border
        return false;
    }
});