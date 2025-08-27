const heart = document.getElementById("heart").innerText;
const coin = document.getElementById("coin").innerText;
const copy = document.getElementById("copy").innerText;

// console.log(heart, coin , copy)

const parentCard = document.getElementById('parent-card');

parentCard.addEventListener('click', function (event) {
    console.log(event.target.parentNode.removeChild(event.target));

})