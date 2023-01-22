

const h2 = document.createElement("h2");
h2.textContent = "Thanks for reading a little bit about me!";

document.querySelector("body").appendChild(h2);


const input = document.getElementById('button');

function clickAlert() {
    alert('Thanks for stopping by!');
}

input.addEventListener('click', clickAlert);