//Los eventos

import data from "./data.js";
import dom from "./dom.js";

const URL = "./stays.json";
const rooms = dom.$("#rooms");
const staysIn = dom.$("#staysIn")
const form = document.getElementById("locationNames");
const guestsInformation = document.getElementById("options");
const location = document.getElementById("locationInformation");
const guests = document.getElementById("guestsInformation");
const datos = await data.getData(URL);
const categories =  data.getCategories(datos);
const buscarBtn = document.getElementById("buscar")
let locationName = "";
let guestsAmount = "";






guests.addEventListener("keyup", (e) => {
guestsAmount = guests.value;
console.log(guestsAmount)
})





//INICIA FILTRO PARA LOCATION
location.addEventListener("keyup", (e) => {
locationName = location.value;
console.log(locationName)
})



buscarBtn.addEventListener("click", (e) => {

    // let guestsNumber = parseInt(guests.value);
    let space = datos.filter(dato => dato.city.toLowerCase().includes(locationName.toLowerCase()))
    console.log(space)
    showcards(space)
})
//TERMINA FILTRO PARA LOCATION






function showcards (stays) {
    rooms.innerHTML = ""
    stays.forEach(element => {
    //Se crea el card con la informacion del elemento
        const card = dom.newCard(element);
    //Se agrega el card al elemento rooms
         rooms.appendChild(card)

    })
}
showcards(datos)



