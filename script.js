// Declare variables below to save the different divs of your story.

let buttonOne=document.querySelector(".option-one");
let buttonTwo=document.querySelector(".option-two");
let buttonThree=document.querySelector(".option-three");
let buttonFour=document.querySelector(".option-four");
let storyOpening=document.querySelector(".story-opening");
let optionOneScreen=document.querySelector(".option-one-screen");
let optionTwoScreen=document.querySelector(".option-two-screen");
let optionOneEnd=document.querySelector(".option-one-end");
let optionTwoEnd=document.querySelector(".option-two-end");



// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.

//Everything but yes, no and start page
//idk how to make it happen when opening the page
//-------------------------------V
storyOpening.addEventListener('shows', function(){
    buttonThree.style.display = "none";
    buttonFour.style.display = "none";
    optionOneScreen.style.display = "none";
    optionTwoScreen.style.display = "none";
    optionOneEnd.style.display = "none";
    optionTwoEnd.style.display = "none";
});


//No, you don't want to fight mike tyson
buttonOne.addEventListener('click', function(){
    storyOpening.style.display = "none";
    buttonOne.style.display = "none";
    buttonTwo.style.display = "none";
    buttonFour.style.display = "none";  
    optionOneScreen.style.display = "block";
    optionOneEnd.style.display = "none";
    optionTwoEnd.style.display = "none";
    buttonThree.style.display = "block";
});

//Yes, you want to fight mike tyson
buttonTwo.addEventListener('click', function(){
    storyOpening.style.display = "none";
    buttonOne.style.display = "none";
    buttonTwo.style.display = "none";
    buttonThree.style.display = "none";   
    optionTwoScreen.style.display = "block";  
    optionOneEnd.style.display = "none";
    optionTwoEnd.style.display = "none";
});

//continue; to option one end screen "Mike Tyson K.O.s you"
//this one is done/ actualy idk how to make the option 1 end show
 buttonThree.addEventListener('click', function(){
    storyOpening.style.display = "none";
    buttonOne.style.display = "none";
    buttonTwo.style.display = "none";
    buttonThree.style.display = "none";
    buttonFour.style.display = "none";
    optionOneScreen.style.display = "none";
    optionTwoScreen.style.display = "none";
    optionOneEnd.style.display = "block";

});


//Continue; to option two end screen "You've been K.O.'d"
//this one is done/ actualy idk how to make the option 2 end show
 buttonFour.addEventListener('click', function(){
    storyOpening.style.display = "none";
    buttonOne.style.display = "none";
    buttonTwo.style.display = "none";
    buttonThree.style.display = "none";
    buttonFour.style.display = "none";
    optionTwoScreen.style.display = "none";
    optionOneScreen.style.display = "none";
    optionTwoEnd.style.display = "block";

});


INSERT_VARIABLE.addEventListener('click', function(){

});