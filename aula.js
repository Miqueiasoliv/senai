var h1 = document.querySelector('h1')
console.log(h1)





var novoparagrafo = document.createElement("p")

var texto = document.createTextNode("texto criado pelo ")

novoparagrafo.appendChild(texto)

var body = document.querySelector('body')

body.appendChild(novoparagrafo)