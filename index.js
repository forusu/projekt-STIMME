let array = []
let isPlaying = false
let arrPos = 0

function playAudio(a){

    var audioplayer = new Audio(`./Sounds/${a}.wav`);
    audioplayer.play()

    }

function forward() {
    arrPos++
}

function backward() {
    arrPos--
}

function keypad(n) { 
    array.push(n); 
} 
function reset() {
    array.splice(0, array.length)
    numbers.splice(0, numbers.length)
}
    
function numbers() {

    let numbers = array.join("").split('')
    if (arrPos > numbers.length)
        arrPos = 0
    for (let i = arrPos; i < numbers.length; i++) {
    
    (function (i) {
        setTimeout(function () {
            playAudio(numbers[i]);
        }, 700 * i);
    })(i);
}
            
            
}
