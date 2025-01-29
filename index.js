function playSound (key) {
    switch (key) {
        case "w":
            const crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
    
        case "a":
            const kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        
        case "s":
            const snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;    
        
        case "d":
            const tom1  = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;  

        case "j":
            const tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;  

        case "k":
            const tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;  

        case "l":
            const tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;  

            default: console.log(buttonInnerHTML, pressedKey);
        }
}

document.querySelectorAll(".drum").forEach((button) => { // query selector for each .drum button
    button.addEventListener("click", function () { // add event listener for button
        const buttonInnerHTML = this.innerHTML; // Get the button's innerHTML 
        playSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
        })
    })

document.addEventListener("keydown", function (event) { // add event listener for entire document)
    const pressedKey = event.key; // Get the key that was pressed 
    playSound(pressedKey);
    buttonAnimation(pressedKey);
})

//add .pressed CSS class to active button | add class to element

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed"); 
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 200);
}

