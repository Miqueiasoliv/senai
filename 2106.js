while(true){
    var nota = prompt('digite uma nota ')
    if(nota > 0 && nota < 10){
        alert("aprovado")
        break
    }
    else{
        alert("numero invalido ")
    }
}