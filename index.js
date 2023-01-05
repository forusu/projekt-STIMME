function playAudio(a){

    var audioplayer = new Audio(`./Sounds/${a}.wav`);
    audioplayer.play()

    }

    
function numbers() {
    
        let array = ['A','A',182,187,'T',190,130,175,179,198,141,53,178,169,149,89,194,140,170,151,143,118,105,93,81,141,132,71,51,56,53,'E']
    
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
    
    
   

