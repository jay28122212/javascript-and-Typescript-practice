//Function

 let user=function() {

    console.log('Welcome jay ')
 }
 user()



 let val= function(num){

    let number= num*num
    return `this is; ${number}`
 }

 let jar=val(55)
 let jax=val(444)
 let jat=val(7)

 console.log(jar)
 console.log(jax)
 console.log(jat)


 let add= function(a=5,b=66,c=80){
return (a+b)*c;
 }

 let res=add(44,55,71)
 console.log(res)


 // Template string

 let name = 'jay ' 
let age =52
 console.log(`hi my name is ${name} my age is ${age}`)

 // simple project

 let cal =function(score,totalscore){

    let result=(score/totalscore)*100;
    if(result>=90){

        return `you got A ${result}`

    }else if(result>=80){

        return `you got ${result}`

    }else if(result>=70){

        return`you got B ${result}`

    }else if(result>60){


        return `you got C ${result}`

    }else {


        return `you got F`
    }

 }
 let finaly=cal(15,20)
 console.log(finaly)