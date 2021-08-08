const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]

const filter = {
    search: ''

}

const renders = function(todos,filters){
    const filtered = todos.filter(function(todo){
       return  todo.text.toLowerCase().includes(filter.search.toLowerCase())
    })

        
    const incompleteTodos = filtered.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('.todo').innerHTML = ''
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('.todo').appendChild(summary)

    filtered.forEach(function (todo) {
        const p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector('.todo').appendChild(p)
    })
}
renders(todos,filter)

// Listen for new todo creation
document.querySelector('#add-todo').addEventListener('click', function (e) {
    console.log('Add a new todo...')
})

// Listen for todo text change
document.querySelector('#new-todo-text').addEventListener('input', function (e) {
    console.log(e.target.value)
})

search = document.querySelector('.search').addEventListener('input',function(e){
   filter.search = e.target.value
    renders(todos,filter)
    
})
