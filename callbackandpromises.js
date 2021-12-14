//Callback

const getcallback = (callback) => {

    setTimeout(() => {

        callback(undefined, 'this is data')

    }, 2000)
}

getcallback((err, data) => {

    if (err) {

    } else {
        console.log(data)
    }
})

//Promises


const mypromise = new Promise((reslove, reject) => {

    setTimeout(() => {
        // reslove('succesfully data')
        reject('!error for data')
    }, 2000)

})
mypromise.then((data) => {
    console.log(data)
},
    (err) => {
        console.log(err)
    })

//Example

const getpromises = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('this is not avalilable')
    }, 2000)
})


getpromises(2).then((data) => {

    getpromises(data).then((data) => {
        console.log(`promise data ${data}`)
    }, (err) => {
        console.log(err)
    })

}, (err) => {
    console.log(err)

})

getpromises(10).then((data) => {
    return getpromises(data)
}).then((data) => {
    console.log(data)
})
