function vermais (){
    let pontos = document.getElementById("pontos")
    let maisTexto = document.getElementById("mais")
    let btnVermais = document.getElementById("btnVermais")


    if(pontos.style.display === "none"){
        pontos.style.display= "inline";
        maisTexto.style.display="none";
        btnVermais.innerHTML="Ver Mais";
    }else{
        pontos.style.display="none";
        maisTexto.style.display="inline";
        btnVermais.innerHTML="Ver menos";
    }
}

