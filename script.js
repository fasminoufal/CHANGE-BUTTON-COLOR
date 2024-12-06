const output = document.getElementById("button")
const colours=["red","blue","green","yellow"];
let currentIndex =0;
const bg=document.getElementById("changebg")
function changeColor() {
    output.style.backgroundColor = colours[currentIndex]
    currentIndex= (currentIndex +1)%colours.length
   
}


