/*
* Excercise 1
*
*/

const clicker = document.getElementById("color-block");
const text = document.getElementById("color-name");

clicker.addEventListener("click", changeColor);
/*
* Then write a function that changes the text and the color inside the div
*
*/


function changeColor(){
    console.log(clicker.getAttribute("id"));
    if(clicker.getAttribute("id") === "color-block") {
        clicker.setAttribute("id", "color-block2");
        text.innerHTML = "lightseagreen";

    }
 
    else{
        clicker.setAttribute("id", "color-block");
        text.innerHTML = "#F08080";
        //change the background color using JS
        
        //Change the text of the color using the span id color-name


    }


}
/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/


/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/
// let value = document.getElementById("f-input").value;
const btn = document.getElementById("convertbtn");
const output_num = document.getElementById("c-output");
btn.addEventListener("click", convertTemp);

function convertTemp(){
    
    let value = document.getElementById("f-input").value;
    let calculation = (value -32) *5/9;

    //Calculate the temperature here

    //Send the calculated temperature to HTML
    output_num.innerHTML  = calculation;
}
