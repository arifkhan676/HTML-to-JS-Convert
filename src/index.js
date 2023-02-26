
const nav = document.createElement("nav");
const ul= document.createElement("ul");

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

//button click 



const button = document.createElement("button");
button.classList.add("btn-dark");
button.innerHTML="button";
const btn =document.getElementById("root").appendChild(button);
btn.addEventListener('click',displayDate =>{
const newBtn =  document.getElementById("root").innerHTML=Date();
   document.getElementById("root").appendChild(newBtn);
   
})




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


/*var h1=document.createElement("h1");
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
document.getElementById("demo").innerHTML = day;

const person = {
  firstName: "Ariful",
  lastName: "Hasan",
  id: 5566,
 fullName: function(){
    return this.firstName + " " + this.lastName ;
  }
};
document.getElementById("demo").innerHTML = person.fullName();


const inch= 176;
console.log(inch/28);

function inc(inchi){
 const ft=inchi/12;
 return ft + " ft";
}

const ans= inc(72);
console.log(ans);

//array


function inc(inchi){
 const ft=inchi/12;
 return ft + " ft";
}

const arr=[188,172,132];

const val= inc(arr[1]);
console.log(val);

const randomName=["arif","hasan","biplob"];
const value= randomName.length;

function leapYear(year){
  if(year%4==0){
    return console.log(year + " is leap year");
   }
   else  {
    return console.log(year + " is not leap year");

   }
}
leapYear(34);

//factorial  3! = 3*2*1
/*
function fact(val){
   const sum=1;
    for(var i=0; i<=val; i++){
        sum=sum+i;
    }
    return sum;
}
const send= fact(9);
console.log(send); */

// while factorial

const sum=1;
const i=1;
while(i <= 10){
    sum= sum*i;
    console.log(i, sum);
   i++;
}
