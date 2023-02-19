
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

