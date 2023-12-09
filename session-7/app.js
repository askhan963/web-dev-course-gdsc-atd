// printing something
console.log("Hello Write...")


//  variable
//  var,const,let

let name = "Awais"

console.log(name)
name = " Khan"
console.log(name)
//  conditionals statement
var x = false;
if(x){
    console.log("Thr value of X is ",x)
}
else{
    console.log("Thr value of X is ",x)
}

//  loops

var names = [ "awais","ali","Aslam","Anwar"]

console.log(names.length)

for(let i=0 ; i<names.length;i++){
    if(names[i]==="ali")
    console.log(names[i],"\n")
}

names.forEach(element => {
    if(element==="Anwar")
    console.log(element,"\n")
});

// object

 var objects = {
    name : "Ali",
    age: 20,
    dob : "20 Decmeber"
 }


 console.log(objects.age)

//  arrAay of obejct 

var arrOfObjects= [
    {
        name : "Ali",
        age: 20,
        dob : "20 Decmeber"
    },
    {
        name : "Anwar",
        age: 22,
        dob : "20 Novermeber"
    }
]

arrOfObjects.map((element)=>{
 console.log(element.dob)
})
// & Objects of Array

var objOfarr= {
    actors : ["A","B","C"],
    ages : [20,22,24]
}

 var y = objOfarr.actors
    console.log(y[2])
   


// functions in JS

// function sum(a,b){
//     return a+b;
// }

// const sum = (a,b)=>{
//  return a+b
// }

const sum = a =>{
    return a+a
   }

console.log(sum(2))