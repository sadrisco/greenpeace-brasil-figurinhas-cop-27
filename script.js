const imageArray = [
  "./asset/cop27-figurinha1.jpg",
  "./asset/cop27-figurinha2.jpg",
  "./asset/cop27-figurinha3.jpg",
];

const image = document.getElementById("figurinha");

window.onload = () => generateRandomPicture(imageArray);

function generateRandomPicture(array) {
  let randomNum = Math.floor(Math.random() * array.length);
  image.setAttribute("src", array[randomNum]);
}