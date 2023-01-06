let array = []

function playAudio(a){

    var audioplayer = new Audio(`./Sounds/${a}.wav`);
    audioplayer.play()

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
