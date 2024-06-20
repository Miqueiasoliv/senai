var numeroaleatorio = Math.floor(Math.random() * 10)
while(numero != numeroaleatorio){
    var numero = prompt ("digite um numero")

    if(numero == numeroaleatorio){
        alert("acertou!")
    }
    else{
        alert("errou!")
    }
}