

const { first } = require("rxjs")

const calculateAverage = (thing, ...numbers) => {
    let sum = 0
    numbers.forEach((num) => sum += num)
    const average = sum / numbers.length
    return `The average ${thing} is ${average}`
}

console.log(calculateAverage('age', 0, 100, 88, 64))



const printTeam = (teamName, coach, ...players) => {
    console.log(`Team: ${teamName}`)
    console.log(`Coach: ${coach}`)
    console.log(`Players: ${players.join(', ')}`)
}

printTeam('jay', 'Mehul', 'vishal', 'aryan', 'Hiren', 'krushi')

//spread syntax


const team={
    team:'Enjoy',
    coach:'jay',
    players:['jay', 'Mehul', 'vishal', 'aryan', 'Hiren', 'gff']
}

    printTeam(team.team,team.coach,...team.players)

    //Destructuring

    const dest={
        id:'bfjheh',
        Text:'javascript',
        complete:false
        
    }

    
    const  {Text,complete,details='djhhhf',...others}=dest
    console.log(Text)
    console.log(complete)
    console.log(details)
    console.log(others)




    const age=[27,55,52,54,22,11]

    const[firstage,secondage,,,,lastage]=age

    console.log(firstage)
    console.log(secondage)
    console.log(lastage)
