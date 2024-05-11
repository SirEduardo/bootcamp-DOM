//1.1

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ulCountries = document.createElement("ul")
for(const country of countries){
    const li = document.createElement("li")
    li.textContent = country
    ulCountries.appendChild(li)
}
document.body.appendChild(ulCountries)

//1.2

const eliminar = document.querySelector(".fn-remove-me")

eliminar.remove()

//1.3

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const ulCars = document.createElement("ul")

for(const car of cars){
    const li = document.createElement("li")
    li.textContent = car
    li.setAttribute("data-function", "printHere")
    ulCars.appendChild(li)
}
document.body.appendChild(ulCars)

//1.4

const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
]

for(const country of countries2){
    const div = document.createElement("div")
    const h4 = document.createElement("h4")
    const img = document.createElement("img")

    h4.textContent = country.title
    img.src = country.imgUrl

    div.appendChild(h4)
    div.appendChild(img)
    document.body.appendChild(div)
}

//1.5

const btn = document.createElement("button")
btn.textContent = "DELETE"

const deleteLast = () =>{
    const removeDivs = document.querySelectorAll("div")
    removeDivs[removeDivs.length -1].remove()
}
btn.addEventListener("click", deleteLast)
document.body.appendChild(btn)

//1.6

const removeDivs2 = document.querySelectorAll("div");

for (const div of removeDivs2) {
    const button = document.createElement("button");
    button.textContent = "DELETE ME"
    button.addEventListener("click", (e) => e.target.parentElement.remove())
    div.appendChild(button);
}