"use strict";

let inputText = document.querySelector("h1#typewriter").textContent;
const NumberOfInterations = inputText.length;
let letterAudio = document.querySelector('#typekey1');
let spaceAudio = document.querySelector('#typespace');

let i= - 1; //because we want to start with the T

initloop();



function initloop(){
console.log(NumberOfInterations);
loop();
}

function loop() {
    i++;
    
    if(i <= NumberOfInterations){
        // inputText = inputText.slice(0,i);
        // console.log(inputText.slice(0,i));
        document.querySelector("h1").textContent = inputText.slice(0,i);
        setTimeout(loop, 200);  
        if(inputText.charAt(i) === " "){
            console.log("4");
            letterAudio.play();
        }
        else{
            spaceAudio.play();
        }
    }
     
}


