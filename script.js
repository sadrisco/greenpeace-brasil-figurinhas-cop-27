const imageArray = [
  "./asset/Beatriz_Campelo.jpeg",
  "./asset/Elisa_Rodrigues_.jpeg",
  "./asset/Helena_Maria.jpeg",
  "./asset/Henrique_da_Cruz.jpeg",
  "./asset/Louise_Cristina.jpeg",
  "./asset/Marcos_Menine.jpeg",
  "./asset/Maria_Eunice.jpeg",
  "./asset/Natan_Batissoco.jpeg",
  "./asset/Raphaella_Lemos.jpeg",
  "./asset/Rebeca_Noemi.jpeg",
  "./asset/Tom_Alerton.jpeg"
];

const image = document.getElementById("figurinha");

window.onload = () => generateRandomPicture(imageArray);

function generateRandomPicture(array) {
  let randomNum = Math.floor(Math.random() * array.length);
  image.setAttribute("src", array[randomNum]);
}