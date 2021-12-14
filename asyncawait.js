
// Async and Await


const getpromises = (num) => new Promise((resolve, reject) => {

    setTimeout(() => {

        typeof num === 'number' ? resolve(num * 2) : reject('this is not avalilable')
        
    }, 2000)
})


const processdata = async () => {


    let data = await getpromises('ffff')
    data = await getpromises(data)
    return data

    // throw new Error('this is wrong')
    // return 12
}

processdata().then((data) => {

    console.log('Data', data)

}).catch((error) => {

    console.log('Error', error)

})
