//Object

let mybook = { 

    title:1999,
    author:'minalbask',
    page:'555'
}
// console.log(mybook)

// Using function

let book=function(bookf){

    console.log(`${bookf.title} and ${bookf.author}` )
}
book(mybook)


// Object Reference

let myaccount={
    name:'jay',
    expence:0,
    income:7000
}
           
let grid=function(account,amount){
account.expence=account.expence+amount
console.log(amount)
    
}

grid(myaccount,2) 
console.log(myaccount)


// new Example

let expance=function(account,amount){
account.expence=account.expence+amount

}
let income=function(account,income){
    account.income=account.income+income

}
let accountres=function(account){
    account.expence=0
    account.income=0
}
let accountsum=function(account){
    let balance=account.income-account.expence
    return `Account for ${account.name} and $${balance} and $${account.income} and $${account.expence}`

}
income(myaccount,2000)
expance(myaccount,2)
expance(myaccount,2)
console.log(accountsum(myaccount))
accountres(myaccount)
console.log(accountsum(myaccount))