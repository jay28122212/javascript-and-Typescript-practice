// Type coercion


'use strict'

console.log('4' + 5)

console.log('10' - 10)

console.log(5 == '5')

const num = typeof {}
console.log(num)
const value = true + 15

const values = false + 20

console.log(value)
console.log(values)


//


const gettrp = (amount) => {
    if (typeof amount === 'number') {
        return amount * .23

    }
    else {
        throw console.error('Argument must be number');
    }
}

try {
    const result = gettrp(5)

    console.log(result)

} catch {

    console.log('catch block running')
}
//Strict Mode

let data

const processdata = () => {
    data = '5454542'
}

processdata()
console.log(data)