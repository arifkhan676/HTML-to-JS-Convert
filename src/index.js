
const nav = document.createElement("nav");
const ul= document.createElement("ul");


const navBro=document.getElementById("navBhai").innerHTML="habijabi";


//const navBro=document.querySelector(".nav-link");
//navBro.innerHTML="heree";

//create an array link objects
const links = [
  {text: "Google", href:"https://www.google.com"},
  {text: "twitter", href:"https://www.twitter.com"}
];

links.forEach(link => {
  const list = document.createElement("li");
   const aElement = document.createElement("a");

   aElement.textContent=link.text;
   aElement.href=link.href; 

list.appendChild(aElement);
ul.appendChild(list);
} );

nav.appendChild(ul);
const navShow= document.getElementById("root");
navShow.appendChild(nav);

var divContainer=document.createElement("div");
divContainer.classList.add("middle-container");

var divProfile = document.createElement("div");
divProfile.classList.add("profile");

var imgPro=document.createElement("img");
imgPro.classList.add("pro");
imgPro.src="images/arif1.jpg";
imgPro.alt="arifp";

var h1 = document.createElement("h1");
h1.innerHTML = "Arif Ul Hasan";

var p = document.createElement("p");
p.innerHTML = "Here is my testing portfolio";

var divProfile = document.createElement("div");
divProfile.classList.add("profile");


//divProfile.appendChild(button);
divProfile.appendChild(imgPro);
divProfile.appendChild(h1);
divProfile.appendChild(p);

divContainer.appendChild(divProfile);

document.getElementById("root").appendChild(divContainer);



const below=document.createElement('div');
const container=document.createElement('div');
const textArea=document.createElement('textarea');
const button=document.createElement('button');
const parag=document.createElement('p');
const par=document.createElement('p');


textArea.placeholder="write something..";
button.innerHTML="post";
//parag.innerHTML="hiiii";

below.classList.add('below');
container.classList.add('container');
textArea.classList.add('textA');
textArea.id="hey_id";
button.classList.add('dark');
parag.classList.add('post');
par.classList.add('post');


var newPost=document.querySelectorAll("textArea");
var anp=document.querySelectorAll("textArea");

button.addEventListener('click',displayDate=> {
  //var newDiv=document.createElement('div');
  parag.innerHTML=new Date();
 //  par.innerHTML=textArea.value;
 par.textContent= document.getElementById("hey_id").value;

} )


container.appendChild(textArea);
container.appendChild(button);
container.appendChild(parag);
container.appendChild(par);

below.appendChild(container);

document.getElementById("root").appendChild(below);



//js work
/*
var contDiv=document.querySelectorAll("container");
var buttonGet=document.querySelectorAll("dark");
var para=document.querySelectorAll("post");
para.innerHTML="hello";
*/



//button click 
/*

const headDiv = document.createElement('div');
const button = document.createElement("button");
button.classList.add("btn-dark");
button.innerHTML="button";
const btn =document.getElementById("root").appendChild(button);
btn.addEventListener('click',displayDate =>{
 // const div=document.createElement('div');
  const div1=document.createElement('div');
  const h1=document.createElement('h1');
   h1.innerHTML="arif bro";
   h1.classList.add("headh1");
  div1.classList.add("card");
  div1.appendChild(h1);
  
  document.getElementById("root").appendChild(div1);
  div1.innerHTML=new Date().toString();
   document.getElementById("root").appendChild(div1);
   
})



/*
var navbarList = document.getElementsByClassName("nav-item");

const li = document.createElement("li");
const a = document.createElement("a");

li.classList.add("nav-item");
a.classList.add("nav-link");
a.href="www.google.com";
a.textContent="Google";

li.appendChild(a);

//navbarList.appendChild(li);
//document.getElementById("root").appendChild(navbarList);


var h1=document.createElement("h1");
h1.innerHTML="Hello world";
document.getElementById("root").appendChild(h1);

var div=document.createElement("div");
div.classList.add("row");

var h2=document.createElement("h2");
h2.innerHTML="I am h2";

var p=document.createElement("p");
p.innerHTML="I am p";

div.appendChild(h2);
div.appendChild(p);

const parentElement=document.getElementById("root");
parentElement.appendChild(div);
*/

const day = new Date().getDay();

switch (day){
  
  case 0:
    thisDay="Saturday";
    break;

    case 1:
      thisDay="Sunday";
      break;
   
        case 2:
    thisDay = "Tuesday";
    break;

  case 3:
   thisDay = "Wednesday";
    break;

  case 4:
    thisDay = "Thursday";
    break;

  case 5:
    thisDay = "Friday";
    break;

}
 // document.getElementById("demo").innerHTML = day;

/*
const person = {
  firstName: "Ariful",
  lastName: "Hasan",
  id: 5566,
 fullName: function(){
    return this.firstName + " " + this.lastName ;
  }
};
document.getElementById("demo").innerHTML = person.fullName();
*/


