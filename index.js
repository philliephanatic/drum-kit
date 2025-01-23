// add event listener to each individual button

document.querySelector("button").addEventListener("click", handleClick);

const allButtons = document.querySelectorAll("button");

function handleClick () {
    allButtons[2];
    alert("It got clicked!");
}