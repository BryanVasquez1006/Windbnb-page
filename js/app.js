import data from "./data.js";
import dom from "./dom.js";

const URL = "./stays.json";
const rooms = dom.$("#rooms");
const staysIn = dom.$("#staysIn")
console.log(staysIn)


console.log(data)
const datos = await data.getData(URL);



const categories =  data.getCategories(datos);




datos.forEach(element => {
    //Se crea el card con la informacion del elemento
    const card = dom.newCard(element);


    //Se agrega el card al elemento rooms
    rooms.appendChild(card)

    

})


