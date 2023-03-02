const button = document.querySelector("button");

function greet() {
    const name = prompt("What is your name?");
    alert(`Hello ${name}, nice to meet you!`);
}

button.addEventListener("click", greet);

const firstName = "Ben";
const lastName = "Chin";

console.log(firstName + lastName);