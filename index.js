//-------------------------MY WAY--------------------------

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        var value = this.innerHTML;
        check(value);
        buttonAnimation(value);
    });
}

function check(value) {
    switch (value) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        default:
            console.log("null");
            break;
    }
}

document.addEventListener("keydown", function(kb) {
    var st = kb.key;
    check(st);
    buttonAnimation(st);

});

function buttonAnimation(key) {
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, .1000);
}
//------------------------------------------------------------