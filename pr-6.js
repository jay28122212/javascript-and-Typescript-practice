//  //Array

 const ary=['jdjd',55,4,'dhd',87,54]
//  console.log(ary)
//  console.log(ary[2])
//  ary.splice(1,1)
 console.log(ary)
//  ary.push('hgggg')
ary.forEach(function(item,index){

    const num=index+1

    console.log(`${num}: ${item}`)

    // console.log(item)
})
// For loop

for(let count=0;count<=6;count++){

    console.log(count)
}

//

const notes=[
    {
        title:'jaypatel',
        no:55
    },
    {
        title:'hhfkkks',
        no:41
    }
]

const  fnote= function(notes,notetitle){
    
    const index= notes.findIndex( function(note ,index){

        return note.title.toLowerCase() ===  note.title.toLowerCase()
    })
    return  notes[index]
}

const notej = fnote( notes,'hhfkkks')

console.log(notej)