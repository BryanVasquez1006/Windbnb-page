/* 
Aqui van todas las funciones o variables relacionadas 
con la manipulación del DOM en la aplicación
*/



const $ = (selector) => document.querySelector(selector)

const newCard = (obj)=> {
    const div = document.createElement("div");
    div.className = "card-img";

    //Aqui se insertan los elementos que tiene el card

    div.innerHTML = `
    
    <div class=" card-img card-img-modified card border border-white  d-flex flex-wrap align-content-center " >
        <img src="${obj.photo}" class="p-1 w-100 h-100" alt="${obj.city}">


    <div class="card-info d-flex flex-row justify-content-between  ">
      <span class="super-host d-flex flex-column justify-content-center border border-2 rounded-4 border-black ">
        <p class=" container-fluid fs-6 fw-bold">SUPER HOST</p>
      </span>
      <p class=" fs-5 p-cardInfo">${obj.type} . ${obj.beds} beds</p>
      <div class="d-flex flex-row  ">
        <span class="star material-symbols-outlined">
          star
          </span>
        <p class=" fs-5 ranting p-cardInfo ">${obj.rating}</p>
      </div>
    </div>
    <div class="city-description d-flex flex-row">
      <p>${obj.title}</p>
     </div>

  </div>
    `

    return div;
}

export default {
    newCard,
    $
}