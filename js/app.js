//Los eventos

import data from "./data.js";
import dom from "./dom.js";

const URL = "./stays.json";
const rooms = dom.$("#rooms");
const staysIn = dom.$("#stays");
const guestsInformation = document.getElementById("options");
const location = dom.$("#locationInformation");
const guests = document.getElementById("guestsInformation");
const buscarBtn = document.getElementById("buscar");
const locations = document.getElementById("locationNames");
const substractBtn = document.getElementById("restarBtn");
const addBtn = document.getElementById("sumarBtn");
const addingGuests = document.getElementById("counter");
const addingChildren = document.getElementById("counterChildren");
const restarChildren = document.getElementById("restarChildren");
const sumarChildren = document.getElementById("sumarChildren");
const contarChildren = document.getElementById("counterChildren");
const locationButtons = document.querySelectorAll(".locationBTN");

// console.log(contarChildren, sumarChildren, restarChildren);

// let locationName = "";

let guestsTotal = 0;
let selectedCity = "";
let minimoContador = 0;
let maximoContadorChild = 13;
let minimoContadorChild = 0;
let valorContadorChild = 0;
let maximoContador = 13;
let valorContador = 0;

const datos = await data.getData(URL);
const categories = data.getCategories(datos);

// FUNCION QUE INSERTA LAS CARDS
function showcards(stays) {
    rooms.innerHTML = "";
    stays
      .filter((element) => {
        const cityName = element.city.toLowerCase();
        const guestsCount = parseInt(guests.value); // se obtiene el número de huéspedes ingresado
        const cardGuests = parseInt(element["data-guests"]); 
        // Aplica los filtros de ciudad y huéspedes
        return (selectedCity === "" || cityName === selectedCity) && (isNaN(guestsCount) || guestsCount <= cardGuests);
      })
      .forEach((element) => {
        // Se crea el card con la información del elemento
        const card = dom.newCard(element);
        // Se agrega el card al elemento rooms
        rooms.appendChild(card);
        console.log(card);
      });
  }



// FUNCION PARA FILTRAR LA BUSQUEDA POR CIUDAD

locationButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    const nombreCiudad = getCityName(
      this.querySelector(".countryList").textContent
    );
    const cityName = this.dataset.city;
    location.value = cityName;
    selectedCity = nombreCiudad;

    showcards(datos);
    staysCounter();
    
  });
});

//AGREGANDO EL EVENTO CLICK AL INPUT DE GUESTS
// guests.addEventListener("keyup", (e) => {
//   guestsAmount = parseInt(guests.value);
//   console.log(guestsAmount);
// });

location.addEventListener("keyup", (e) => {
    const locationName = location.value.toLowerCase();
    const cards = rooms.children;
  
    for (const card of cards) {
      const countryName = card.getAttribute("data-city").toLowerCase(); // Cambia 'location' por "data-location"
      const guestsCount = parseInt(guests.value); // Obtiene el número de huéspedes ingresado
      const cardGuests = parseInt(card.getAttribute("data-guests")); // Asume que cada card tiene un atributo 'data-guests' que contiene el número de huéspedes permitido
  
      // Aplica los filtros de ciudad y huéspedes
      if (countryName.includes(locationName) && (isNaN(guestsCount) || guestsCount <= cardGuests)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    }
    
    // Actualiza las cards en función del filtro de ciudad y huéspedes
    const cityName = locationName.trim();
    showcards(datos, cityName);
  });

// FUNCION PARA MOSTRAR CUANTAS HABITACIONES HAY DISPONIBLES

function staysCounter() {
  //obteniendo el total de elementos hijos de mi elemento padre "rooms" =14
  const numOfStays = rooms.children.length;
  staysIn.innerHTML = numOfStays <= 14 ? numOfStays : "14+";
}
staysCounter();

function getCityName(name) {
  const nombreCiudad = name.split(",")[0].trim();
  console.log(nombreCiudad);
  return nombreCiudad;
}

//HACER QUE LOS BOTONES INSERTEN EL NUMERO DE GUESTS

const sumar = addBtn.addEventListener("click", () => {
  if (valorContador < maximoContador) {
    valorContador++;
    actualizarContador(valorContador, addingGuests);
  }
});

const restar = substractBtn.addEventListener("click", () => {
  if (valorContador > minimoContador) {
    valorContador--;

    actualizarContador(valorContador, addingGuests);
  }
});

const addChilldren = sumarChildren.addEventListener("click", () => {
    if (valorContadorChild < maximoContadorChild) {
      valorContadorChild++;
  
      actualizarContador(valorContadorChild, addingChildren);
    }
  });
  
  const substractChildren = restarChildren.addEventListener("click", () => {
    if (valorContadorChild > minimoContadorChild) {
      valorContadorChild--;
  
      actualizarContador(valorContadorChild, addingChildren);
    }
  });

function actualizarContador(valor, elemento) {
  elemento.textContent = valor;
  console.log(valor);
}

//TERMINA FILTRO PARA LOCATION
buscarBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const locationName = location.value.trim().toLowerCase();
  selectedCity = locationName !== "" ? locationName : "";
  staysCounter();
  
  showcards(datos);
});
