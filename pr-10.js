//Arrow function

const squer = (num) => {
    return num * num
}

console.log(squer(5))

// Example

const people = [{
    name: 'jay',
    age: 20

}, {
    name: 'vishal',
    age: 41
}, {
    name: 'monika',
    age: 25
}
]
const under30 = people.filter((person) => person.age < 30)

console.log(under30)

const person = people.filter((person) => person.age == 25
)
console.log(person)

//Example

const age = 5
let message

message = age > 18 ? 'you can vote' : 'you can not give vote'

console.log(message)

//

const myage = 52

const page = () => {
    console.log('you have page')
}
const errorpage = () => {


    console.log('you have error page')
}

myage >= 88 ? page() : errorpage()

// Truthy and falsy

const products = [{ name: 'jsy patel' }]

const product = products[0]

if (product) {

    console.log('product found')


} else {

    console.log('product is not found')
}