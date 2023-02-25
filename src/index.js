
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

divProfile.appendChild(imgPro);
divProfile.appendChild(h1);
divProfile.appendChild(p);

divContainer.appendChild(divProfile);

document.getElementById("root").appendChild(divContainer);



var navbarList = document.getElementsByClassName("nav-item");

const li = document.createElement("li");
const a = document.createElement("a");

li.classList.add("nav-item");
a.classList.add("nav-link");

a.href="www.google.com";
a.textContent="Google";

li.appendChild(a);
navbarList.appendChild(li);

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