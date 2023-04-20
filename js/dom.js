/* 
Aqui van todas las funciones o variables relacionadas 
con la manipulación del DOM en la aplicación
*/












const $ = (selector) => document.querySelector(selector)

const newCard = (obj)=> {
    const div = document.createElement("div");
    div.className = "card-img col";

    //Aqui se insertan los elementos que tiene el card
    div.innerHTML = `
    
    <div class=" card-img card-img-modified card border border-0  d-flex flex-wrap align-content-center">
      <div class="test">
          <img src="${obj.photo}" class="pb-3 w-100 h-100" alt="${obj.city}">
      </div>
      <div class="card-info d-flex flex-row justify-content-between">
        <div class="chanchito gap-4 w-100 d-flex justify-content-between ">
          <h1 class="${!obj.superHost ? "d-none" : ''} superHost fw-bold text-center rounded-pill ">SUPER HOST</h1>
          <p class=" p-cardInfo">${obj.type}  ${obj.beds >=1 ? `. ${obj.beds} beds`: ""}</p>
          <p class="d-flex  ">
            <span class="star material-symbols-outlined">star</span>
            <span class="  ranting p-cardInfo ">${obj.rating}</span>
          </p>
        </div>
      </div>
      <div class="city-description d-flex flex-row mb-5">
        <h6 class = text-nowrap>${obj.title}</h6>
      </div>
    </div>
    `
    return div;
}





export default {
    newCard,
    $
}

