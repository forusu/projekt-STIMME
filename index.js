let array = []
let isPlaying = false
let isPaused = true
let mode = "SPEECH"
let executed = false
var arrPos = 0
var nm

function playAudio(a){
    var audioplayer = new Audio(`./Sounds/${a}.wav`);
    audioplayer.play()
    }

function forward() {
    arrPos++
    if (arrPos > array.length - 1){arrPos = 0}
    document.title = mode + "...." + array[arrPos]
    return arrPos
}

function backward() {
    arrPos--
    if (arrPos < 0){arrPos = 0}
    document.title = mode + "...." + array[arrPos]
    return arrPos
}

function keypad(n) {
    nm = n
    switch(n) {
        case "A":
            nm = ":"
            break;
        case "T":
            nm = "/"
            break;
        case "E":
            nm = "+"
            break;
    }
    document.title = mode + "...." + nm 
    array.push(n);
    return nm
} 

function executeCMD() {
    executed = true
}

function clearmsg(executed) {
    if (!executed) {
        document.title = "CLEAR..?"
    }
    if (executed == true) {
        document.title = "CLEAR..!"
        array.splice(0, array.length)
        numbers.splice(0, numbers.length)
    }
}

function reset() {
    document.title = "INPUT"
    array.splice(0, array.length)
    numbers.splice(0, numbers.length)
}
    
// function numbers() {
//     isPlaying = !isPlaying
//     let numbers = array.join("").split('')
//     if (arrPos > numbers.length)
//             arrPos = 0

//             for (let i = 0; i < numbers.length; i++) {
//                 (function (i) {
//                     setTimeout(function () {
//                         if (isPlaying == true) {
//                             playAudio(numbers[i]);
//                             document.title = "o........." + numbers[i]
//                             console.log(i)
//                             console.log(numbers.length)
//                         } if (i == numbers.length - 1) {
//                             document.title = "END"
//                         }
//                     }, 700 * i);
//                 })(i);     
//             } 
            
// }


// GOD HELP ME THIS FUCKING SUCKS IT DOESN'T FUCKING WORK PLEASE HELP ME
function stastp() {
    isPaused = !isPaused
    let numbers = array.join("").split('')
    if (arrPos == numbers.length) {arrPos = 0}
    console.log(arrPos)

    if (isPaused == false) {
        for (arrPos; arrPos < numbers.length; arrPos++) {
            (function (arrPos) {
                setTimeout(function () {
                    while (true) {
                        switch(isPaused) {
                            case false:
                                playAudio(numbers[arrPos])
                                document.title = "o........." + numbers[arrPos]
                            case true:
                                arrPos = numbers[arrPos]
                                return arrPos
                        } 
                    }
                }, 700 * arrPos)
            })(arrPos); 
        }
    } if (isPaused == true) {
        return arrPos
    }
}