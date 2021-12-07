// object Method

let restaurant={

    name:'ABS',
    guestcaecity:80,
    guestcount:78,

 checkavailable:function(size){
     let seatleft=this.guestcaecity-this.guestcount
     return size<=seatleft
 }
 }

 let status=restaurant.checkavailable(8)
 console.log(status)


 //

 let name ='jay   patel'

 console.log(name.length)

 console.log(name.toUpperCase())

 console.log(name.toLowerCase())


 let pasword="jfjfjfffpasword555555"
 console.log(pasword.includes('pasword'))

 console.log(name.trim())

 //

 let num=104.222

 console.log(num.toFixed(2))

 console.log(Math.round(num))

 console.log(Math.floor(num))
 
 console.log(Math.ceil(num))
