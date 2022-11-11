const imageArray = [
  "./asset/cop27-figurinha1.jpg",
  "./asset/cop27-figurinha2.jpg",
  "./asset/cop27-figurinha3.jpg",
  "./asset/Beatriz_Campelo.png",
  "./asset/Elisa_Rodrigues_.png",
  "./asset/Helena_Maria.png",
  "./asset/Henrique_da_Cruz.png",
  "./asset/Louise_Cristina.png",
  "./asset/Marcos_Menine.png",
  "./asset/Maria_Eunice.png",
  "./asset/Natan_Batissoco.png",
  "./asset/Raphaella_Lemos.png",
  "./asset/Rebeca_Noemi.png",
  "./asset/Tom_Alerton.png"
];

const image = document.getElementById("figurinha");

window.onload = () => generateRandomPicture(imageArray);

function generateRandomPicture(array) {
  let randomNum = Math.floor(Math.random() * array.length);
  image.setAttribute("src", array[randomNum]);
}