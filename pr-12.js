
//Constructor Function

const person = function (firstname, lastname, age) {
    this.firstname = firstname
    this.lastname = lastname
    this.age = age
}

const sample = new person('jay', 'patel', 21)
console.log(sample)

const person1 = new person('Hani', 'Patel', 25)
console.log(person1)

// Example with Pototype object

const game = function (word, guess,likes=[]) {
    this.word = word
    this.guess = guess
    this.likes=likes
}

game.prototype.getBio=function(){
    let bio = `${this.word}  and  ${this.guess}`
    
    this.likes.forEach((like)=> {  
        
        bio+=  `${this.word}  likes ${like}`
    })
    return bio


}



game.prototype.setName=function(fullname){
    const names=fullname.split(' ')
    this.word=names[0]
    this.guess=names[1]
}

const first = new game('Dog', 3 ,['Barking','seeing'])
first.setName('miki')
console.log(first.getBio())


const second = new game('cat', 8)
console.log(second.getBio())

