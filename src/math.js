
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


//swap ,temp
var a=3;
var b=5;
var temp=a;
    a=b;
    b=temp;
console.log("a= , ",a, "b= ",b);

//swap or reset

var x=12;
var y=24;
[x,y]=[y,x];

console.log("x= , ",x, "y= ",y);

//factorial  3! = 3*2*1

var num=1;

for(var i=5; i>0; i--){
     num=num*i;
     console.log(i,num);

}
console.log("factorial num is "+num);

//biggest value of three elements

var a=23;
var b=35;
var c=12;
var max= Math.max(a,b,c);
console.log("max num is "+max);

//also we can use if else
if(a>b){
    if(a>b){
        console.log("a is bigger");
    }
    else{
        console.log("b is bigger");
    
    }
}
else if(b>c){
    if(b>c){
        console.log("b is bigger");
    
    }
    
    else{
        console.log("c is bigger");
    
    }
}



class person  {
    constructor(){
      this.firstName= "Ariful";
      this.lastName= "Hasan";
      this.id= 5566;
      
    }
   fullName() {
      return this.firstName + " "+ this.lastName;
    }
  }
console.log(new person().fullName());

   // document.getElementById("demo").innerHTML = new person.fullName();
  
    //create various types of names using class methods.
    class personPro  {
        constructor(f,l){
          this.firstName= f;
          this.lastName= l;
          this.id= 5566;
          
        }
       fullName() {
          return this.firstName + " "+ this.lastName;
        }
      }
      console.log(new personPro('nur','hossain').fullName());



 console.log("high score of class");
var marks=[34,56,99,14,75,68,56];

for(var i=1;i<marks.length;i++){
   var  maxMarks=marks[i];
   console.log(maxMarks);
}