while (true){
    var nome = prompt("digite o seu nome")
    var senha = prompt("digite a sua senha")
    var nome1 = prompt("login")
    var senha = prompt("senha")

    if(nome == nome1 && senha == senha1) {
        alert("senha correta")
        break
    }
    else{
        alert("erro, tente novamente")
    }
}