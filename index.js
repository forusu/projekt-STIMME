let array = []

function playAudio(a){

    var audioplayer = new Audio(`./Sounds/${a}.wav`);
    audioplayer.play()

    }


function one() { 
    array.push('1'); 
} 
function two() { 
    array.push('2'); 
} 
function three() { 
    array.push('3'); 
} 
function four() { 
    array.push('4'); 
} 
function five() { 
    array.push('5'); 
} 
function six() { 
    array.push('6'); 
} 
function seven() { 
    array.push('7'); 
} 
function eight() { 
    array.push('8'); 
} 
function nine() { 
    array.push('9'); 
} 
function achtung() {
    array.push('A');
}
function trennung() {
    array.push('T');
}
function ende() {
    array.push('E');
}
function clear() {
    array = []
}
    
function numbers() {

        let numbers = array.join("").split('')
    
        for (let i = 0; i < numbers.length; i++) {
        
        // if (numbers[i] == 'I') {

        //     (function (i) {
        //         setTimeout(function () {
        //             playAudio(numbers[i])
        //         }, 48000 * i);
                
        //     })(i);
        // }

        (function (i) {
            setTimeout(function () {
                playAudio(numbers[i]);
            }, 1200 * i);
        })(i);
        

           

    }
            
            
}
    
    
   

