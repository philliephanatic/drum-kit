// create function that takes a character and checks against switch statement to play correct sound
// call in event listener for keypress and button

document.querySelectorAll(".drum").forEach((button) => {
    button.addEventListener("click", function () {
        
        this.style.color = "white";
        
        let buttonInnerHTML = this.innerHTML;

        switch (buttonInnerHTML) {
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

                default: console.log(buttonInnerHTML);
            }
    
    })

    

    document.addEventListener("keydown", function (event) {
        let keySound = event.key;
        keySound.play();
    })
})




  
