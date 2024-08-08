function clicar() {
    alert('você clicou no botão')
    var novoparagrafo = document.createElement("p")

var texto = document.createTextNode("texto criado pelo ")

novoparagrafo.appendChild(texto)

var body = document.querySelector('body')

body.appendChild(novoparagrafo)
}
