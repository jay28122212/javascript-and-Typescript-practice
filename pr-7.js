const todos=[{
    text:'kitchen',
    complete:true
},
{
    text:'i will learn',
    complete:false
},
{
    text:'it is very hard',
    complete:true
},
{
    text:'fast work',
    complete:true
}]

const incompletetodos=todos.filter(function(todo){

    return todo.complete
})

 const summary=document.createElement('h1')
 summary.textContent='jay patel '
 document.querySelector('body').appendChild(summary)


 todos.forEach(function(todo){
    const p=document.createElement('p')
   p.textContent=todo.text
 document.querySelector('body').appendChild(p)

 })


 document.querySelector('#fbtn').addEventListener('click',function(e){
     e.target.textContent='i you are very slow'
 })



 document.querySelector('#sbtn').addEventListener('click',function(e){
    document.querySelectorAll('#one').forEach(function(note){

        note.remove()

    })
})