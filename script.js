/* Declare variables below to save the different sections (divs) of your story*/
let goLeftButton=document.queryselector(".treehouse-button");
let goRightButton=document.queryselector(".lake-button");
let enterTreehouseButton=document.queryselector(".enter-treehouse-button");
let keepWalkingButton=document.queryselector(".keep-walking-button");
let enterLakeButton=document.queryselector(".enter-lake-button");
let keepWalkingButton=document.queryselector(".keep-walking-button");

let storyOpening=document.querySelector(".story-opening")
let treehouseScreen=document.querySelector(".treehouse-button-screen")
let lakeScreen =document.querySelector(".lake-button-screen")
let treehouseEnd =document.querySelector(".treehouse-button-end")
let lakeEnd =document.querySelector(".lake-button-end")
let castleEnd =document.querySelector(".keep-walking-button-end")

goLeftButton.onclick=function(){
  storyOpening.style.display="none";
  title.style.display="none";
  treehouseScreen.style.display="block";
  
};

goRightButton.onclick=function(){
  title.style.display="none";
  storyOpening.style.display="none";
  lakeScreen.style.display="block";
};

enterTreehouseButton.onclick=function(){
  optionOneScreen.style.display="none";
  treehouseEnd.style.display="block";
};

enterLakeButton.onclick=function(){
  optionOneScreen.style.display="none";
  lakeEnd.style.display="block";
}

keepWalkingButton.onclick=function(){
  optionTwoScreen.style.display="none";
  winterEnd.style.display="block";
  startOverButton.style.display="block";
}

