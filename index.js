/*var myobj={
    name:"Saumya",
    display:()=>{},
};
var a=5;
console.log(a);
for(var i=0;i<5;i++){
    //
}
console.log(i);
//temporal deadzone
/*const a;
console.log(a);
a=5;
console.log(a);
const a=5;
let b;*/

/*
Primitive Data Types
Number
String
Boolean
undefined-->by default value
null

let c=5;
console.log(c,typeof c);
c="Hello";
console.log(c,typeof c);
c=true;
console.log(c,typeof c);
c=null;
console.log(c,typeof c);
c=undefined;
console.log(c,typeof c);

let a=null;
if(a==null){
    console.log(true);
}
/*
Secondary Data Types
object 
array 
function
var myObj={
    name:"Saumya",
    occupation:"Student",
    show: showName
};
myObj.show();
console.log(myObj.name);
function showName(){
    console.log(myObj.name);
}
const  fruh="chocolatebar";
console.log(fruh);       // new boolean creates the object */

/*const fruit=[]; // can't change the references, allows changes but reference stays the same, changes can be done in object too
fruit.push('banana','apple','peach');
console.log(fruit);
fruit['1']="tree";
console.log(fruit);*/

/*let arr=[1,'GLA',2.5,null,undefined,true];
console.log(arr);
arr.splice(1,3);*/
//arr.shift();//removes first element
//console.log(arr);
//arr.unshift(45);// places this in the first place;
//arr.find() 
//wap to check if a number is armstrong or not
function isArmstrong(n){

let copy=n;
let copy2=n;
let count=0;
while(n>0)
{
    n=parseInt(n/10);
    count++;
}
let sum=0;
while(copy>0)
{   let digit=copy%10;
  sum=sum+digit**count;
  copy=parseInt(copy/10); 
}
return sum==copy2;
}
function checkAndShow(){
    let val=document.getElementById("val").value;
    let para=document.createElement("p");
    if(isArmstrong(val)){
        para.textContent="It is an Armstrong Number";
    }
    else{
        para.textContent="It is not an Armstrong Number";
    }
    document.getElementsByTagName("body")[0].append(para);
}

//WAP to store movie name with rating in an object list , display them on html using <ul> tag. Perform CRUD operations;
// Array to store movies
// Array to store movies
var movies = [];

// Function to display movies
function displayMovies() {
  var list = document.getElementById("movieList");
  list.innerHTML = ""; // clear old list

  for (var i = 0; i < movies.length; i++) {
    var movie = movies[i];
    var li = document.createElement("li");
    li.textContent = movie.name + " - Rating: " + movie.rating;
    list.appendChild(li);
  }
}

// Create (Add) movie
function addMovie() {
  var name = document.getElementById("movieName").value.trim();
  var rating = document.getElementById("movieRating").value;

  if (name && rating) {
    // Storing explicitly with key-value pairs
    movies.push({ name: name, rating: rating }); 
    displayMovies();
  } else {
    alert("Please enter both movie name and rating.");
  }
}

// Update movie (by name)
function updateMovie() {
  var name = document.getElementById("movieName").value.trim();
  var rating = document.getElementById("movieRating").value;
  var found = false;

  for (var i = 0; i < movies.length; i++) {
    if (movies[i].name.toLowerCase() === name.toLowerCase()) {
      movies[i].rating = rating;
      found = true;
      break; 
    }
  }

  if (found) {
    displayMovies();
  } else {
    alert("Movie not found!");
  }
}

// Delete movie (by name)
function deleteMovie() {
  var name = document.getElementById("movieName").value.trim();
  var index = -1;

  for (var i = 0; i < movies.length; i++) {
    if (movies[i].name.toLowerCase() === name.toLowerCase()) {
      index = i;
      break; 
    }
  }

  if (index !== -1) {
    movies.splice(index, 1);
    displayMovies();
  } else {
    alert("Movie not found!");
  }
}
