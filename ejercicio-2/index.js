//1.1

const divVacio = document.createElement("div")
document.body.appendChild(divVacio)

//1.2

const div = document.createElement("div")
const p = document.createElement("p")

div.appendChild(p)
document.body.appendChild(div)

//1.3

const divBucle = document.createElement("div")

for(let i = 0; i < 6; i++){
    const p = document.createElement("p")
    divBucle.appendChild(p)
}

document.body.appendChild(divBucle)

//1.4

const pDinamica = document.createElement("p")
pDinamica.textContent = "soy dinamico"
document.body.appendChild(pDinamica)

//1.5

const h2 = document.querySelector(".fn-insert-here")
h2.textContent = "Wubba Lubba dub dub"

//1.6

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul = document.createElement("ul")

for (app of apps){
    const li = document.createElement("li")
    li.textContent = app
    ul.appendChild(li)
}
document.body.appendChild(ul)

//1.7

const removes = document.querySelectorAll(".fn-remove-me")

for(remove of removes){
    remove.remove()
}

//1.8

const allDiv = document.querySelectorAll("div")
const midP = document.createElement("p")
midP.textContent = "voy en medio"

document.body.insertBefore(midP, allDiv[1])

//1.9

const insideDiv = document.querySelectorAll("div.fn-insert-here");

for (const div of insideDiv) {
    const p = document.createElement("p");
    p.textContent = "Voy dentro!";
    div.appendChild(p);
}
