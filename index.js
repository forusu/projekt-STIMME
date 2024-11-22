let array = []
let isPlaying = false
let mode = "SPEECH"

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
    document.title = mode + "...." + n 
    array.push(n);

} 

function clear() {
    document.title = "CLEAR.."
    array.splice(0, array.length)
    numbers.splice(0, numbers.length)
}

function reset() {
    document.title = "INPUT"
    array.splice(0, array.length)
    numbers.splice(0, numbers.length)
}
    
function numbers() {
    document.title = "END"
    let arrPos = 0
    isPlaying = !isPlaying
    let numbers = array.join("").split('')

    if (arrPos > numbers.length)
            arrPos = 0

            for (let i = arrPos; i < numbers.length; i++) {
                (function (i) {
                    setTimeout(function () {
                        if (isPlaying == true) {
                            playAudio(numbers[i]);
                            document.title = "o........." + numbers[i]           
                        } 
                    }, 700 * i);
                })(i);     
            }
            
}
