// add event listener to each individual button

const audio = new Audio("sounds/tom-1.mp3");

document.querySelectorAll(".drum").forEach((button) => {
    button.addEventListener("click", () => {
        alert("It was clicked!"),
        audio.play()
    })
});


