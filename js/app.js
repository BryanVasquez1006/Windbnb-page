//Los eventos

import data from "./data.js";
import dom from "./dom.js";

const URL = "./stays.json";
const rooms = dom.$("#rooms");
const staysIn = dom.$("#staysIn")
const guestsInformation = document.getElementById("options");
const location = document.getElementById("locationInformation");
const guests = document.getElementById("guestsInformation");
const buscarBtn = document.getElementById("buscar")
const locations = document.getElementById("locationNames");
const substractBtn = document.getElementById("restarBtn")
const addBtn = document.getElementById("sumarBtn");
const addingGuests = document.getElementById("counter")
const restarChildren = document.getElementById("restarChildren")
const sumarChildren = document.getElementById("sumarChildren")
const contarChildren = document.getElementById("counterChildren")
console.log(contarChildren, sumarChildren, restarChildren)



let locationName = "";
let guestsAmount = 0;

const datos = await data.getData(URL);
const categories =  data.getCategories(datos);










//HACER QUE LOS BOTONES INSERTEN EL NUMERO DE GUESTS 
let minimoContador = 0
let maximoContador = 13;
let valorContador = 0;


const sumar = addBtn.addEventListener("click", (e) => {
    if (valorContador < maximoContador ) {
        valorContador++
addingGuests.textContent = valorContador
console.log(addBtn)
    }

})

const restar = substractBtn.addEventListener("click", (e) => {
    if (valorContador > minimoContador ) {
        valorContador--;
        addingGuests.textContent = valorContador
        console.log()
      }

    })

//  restar(restarChildren)
// sumar(sumarChildren)


 //FIN DE HACER QUE LOS BOTONES INSERTEN EL NUMERO DE GUESTS 






//HACER QUE LOS PAISES DESAPAREZCAN 
location.addEventListener("click",(e) => {
   
    if (locations.style.display == "none") {

        locations.style.display == "block"
    }else{
        locations.style.display == "none"
        console.log(locations)
      
    } 
}
)





//AGREGANDO EL EVENTO CLICK AL INPUT DE GUESTS
guests.addEventListener("keyup", (e) => {
guestsAmount = parseInt(guests.value);
console.log(guestsAmount)
})

//INICIA FILTRO PARA LOCATION Y GUESTS
location.addEventListener("keyup", (e) => {
locationName = location.value;
console.log(locationName)
})

buscarBtn.addEventListener("click", (e) => {

    // let guestsNumber = parseInt(guests.value);
    let space = datos.filter(dato => dato.city.toLowerCase().includes(locationName.toLowerCase()) && dato.maxGuests <= guestsAmount)

    showcards(space)
    console.log(space)

  


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



