let feh=32
let cel=(feh-32)*5/9
let kel=(feh+459.67)*5/9

console.log(cel)
console.log(kel)

// Booleans and comparison operator

let tem=50
let jae= tem<55

console.log(jae)

// if statment

let temp =80

if(temp<500){

    console.log("it is valid")
}

let loc=true

if(loc){
    console.log("it is come")
}
else{

    console.log("sorry for this!")
}

//logical And and or

let val =10
 if(val<=60 && val<=90){

    console.log("value is valid")
 }

 let value =500

 if(value<=90 || value>=100){
     console.log('it is best value')

 }

 //Scope

 let name='val'

 if(true){
  let   name='jay'
  
  if(true){
      console.log(name)
  }
 }
 if(true){
     console.log(name)
 }