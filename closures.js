
//Closures

const Myfunction = () => {

    const message = 'hi jay'

    const printmessage = () => {

        console.log(message)
    }
    printmessage()

}
Myfunction()

//Example

const createcounter = () => {
    let count = 0
    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}
const counter = createcounter()
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get())

//Ex

const add = (cal) => {

    return (amount) => {

        return cal * amount

    }

}

const add12 = add(.5)
console.log(add12(500))




