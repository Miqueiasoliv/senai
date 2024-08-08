var h1 = document.querySelector('h1')
console.log(h1)


var novoh1 = document.createElement("h1")

var texto = document.createTextNode("texto criado pelo miqueias")

novoh1.appendChild(texto)

var body = document.querySelector('body')

body.appendChild(novoh1)

body.removeChild(novoh1)
