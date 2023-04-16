/* 
Aqui van todas las funciones o variables relacionadas
con la manipulación de los datos de la aplicacion
*/







//AQUI SE OBTIENEN LOS DATOS DE LA API LOCAL JSON
const getData = async () => {
  // Obytener los datos del archivo 'stays.json'
  const data = fetch('./stays.json')
  
    .then(response => response.json())
    .then( json => json)
    
  return data;

}



const getCategories = (data) => {
  const categories = data.map(elem => `${elem.city}, ${elem.country}`)
  console.log(categories);
}





export default {
  getData,
  getCategories,
}