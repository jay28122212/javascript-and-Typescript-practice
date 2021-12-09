


const todos = [{
    text: 'learn js',
    completed: false
}, {
    text: ' very best language',
    completed: true
}, {
    text: 'Backend Developer',
    completed: true
}, {
    text: 'Fronter Developer',
    completed: false
}, {
    text: 'in two Month Ready',
    completed: true
}]

const filters = {
    searchText: '',
    hideCompleted: ''
}


const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#sample').innerHTML = ''

    const summary = document.createElement('h2')
    summary.textContent = ` work done ${incompleteTodos.length} Days left`
    document.querySelector('#sample').appendChild(summary)
    todos
    filteredTodos.forEach(function (todo) {
        const p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector('#sample').appendChild(p)
    })
}

renderTodos(todos, filters)

document.querySelector('#text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#form').addEventListener('submit', function (e) {
    e.preventDefault()
    todos.push({
        text: e.target.elements.text.value,
        completed: false
    })
    renderTodos(todos, filters)
    e.target.elements.text.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})

