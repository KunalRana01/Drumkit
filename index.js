

// function getKey(e) {
    

//     let key = e.key;

//     console.log(key);

//     switch (key) {
//         case "w":
//             var audio = new Audio('./sounds/kick - bass.mp3');
//             audio.play();
//             break;

//         case "a":
//             audio = new Audio('./sounds/crash.mp3');
//             audio.play();
//             break;

//         case "s":
//             audio = new Audio('./sounds/snare.mp3');
//             audio.play();
//             break;

//         case "d":
//             audio = new Audio('./sounds/tom-1.mp3');
//             audio.play();
//             break;

//         case "j":
//             audio = new Audio('./sounds/tom-2.mp3');
//             audio.play();
//             break;

//         case "k":
//             audio = new Audio('./sounds/tom-3.mp3');
//             audio.play();
//             break;

//         case "l":
//             audio = new Audio('./sounds/tom-4.mp3');
//             audio.play();
//             break;

//         default:
//             alert("You pressed " + this.textContent + " which is not allowed at all")
//     }






document.addEventListener("keydown" , function(event){
    makesound(event.key);
    addAnimation(event.key);
})


function makesound(key){

    switch (key) {
        case "w":
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;

        case "a":
            audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;

        case "s":
            audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break;

        case "d":
            audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;

        case "j":
            audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;

        case "k":
            audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;

        case "l":
            audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;

        default:
            alert("Sorry! but you pressed \"" + key  + "\" key , use of which is prohibited !")
    }

}


function addAnimation(e){

    let activeButton = document.querySelector("."+e);

    activeButton.classList.add("pressed");

    setTimeout(function _(){
        activeButton.classList.remove("pressed");
    }, 400);





}

