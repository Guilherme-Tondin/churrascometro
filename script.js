

    let adultos = document.getElementById("adultos");
    let criancas = document.getElementById("crianças");
    let tempo = document.getElementById("horas");
    let resultado= document.getElementById("resultado")

    function verificar(){

    if( adultos.value.length == 0 || criancas.value.length == 0 || tempo.value.length == 0){
        window.alert("Por favor, preencha todos os campos abaixo!")}
    else{
         
        let adulto = Number(adultos.value)
        let crianca = Number(criancas.value)
        let hora =  Number(tempo.value)

        let qtdTotalCarne = carnePP(hora) * adulto + (carnePP(hora) / 2 * crianca);
        let qtdTotalCerveja = cervejaPP(hora) * adulto;
        let qtdTotalBebida = bebidasPP(hora) * adulto + (bebidasPP(hora) / 2 * crianca);

        resultado.innerHTML= `<p>${qtdTotalCarne/1000}Kg de Carne`
        resultado.innerHTML+= `<p>${Math.ceil(qtdTotalCerveja/350)} Latas de Cerveja`
        resultado.innerHTML+= `<p>${Math.ceil(qtdTotalBebida/1000)}L de Refrigerante`
    
    }

    function carnePP(hora){
        if(hora >= 6){
            return 650;
        }else{
            return 400;
        }
    }

    function cervejaPP(hora){
        if(hora >= 6){
            return 2000;
        }else{
            return 1200;
        }
    }

    function bebidasPP(hora){
        if(hora >= 6){
            return 1200;
        }else{
            return 900;
        }
    }

}