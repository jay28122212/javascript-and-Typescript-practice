//class

class person {
    constructor(firstname, lastname, age, likes = []) {
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
        this.likes = likes

    }
    getBio() {
        let bio = `${this.firstname} id ${this.lastname}`

        this.likes.forEach((like) => {
            bio += `${this.firstname} likes${like}`
        })
        return bio
    }
    setName(fullName) {

        const names = fullName.spliit(' ')
        this.firstname = names[0]
        this.lastname = names[1]
    }
}

class employee extends person {

    constructor(firstname, lastname, age, position, likes) {
        super(firstname, lastname, age, likes)

        this.position = position

    }
}




const me = new person('jay', 'patel', 21, 'Teacher', ['reading', 'seeaing'])
me.setName('vishal patel')
console.log(me.getBio())

// Getters and setters

const data = {
    get location() {
        return this._location
    },
    set location(value) {
        this._location = value.trim()
    }
}
data.location = 'Mehesana'
console.log(data.location)



