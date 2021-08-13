let todos = []

const filter = {
    search: '',
    hideCompleted: false

}

const todosJSON = localStorage.getItem('todos')

if(todosJSON !== null){
    todos = JSON.parse(todosJSON)
}
const renders = function(todos,filters){
    let filtered = todos.filter(function(todo){
       return  todo.text.toLowerCase().includes(filter.search.toLowerCase())
    })

    filtered = filtered.filter(function(todo){
        if(filters.hideCompleted){
            return !todo.completed
        }else{
            return true
        }
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


// Listen for todo text change

search = document.querySelector('.search').addEventListener('input',function(e){
   filter.search = e.target.value
    renders(todos,filter)
    

})


document.querySelector("#todo-form").addEventListener('submit',function(e){
    e.preventDefault()
    console.log(e.target.elements.input1.value)

    todos.push({
        text:e.target.elements.input1.value,
        completed: false
    })
    localStorage.setItem('todos',JSON.stringify(todos))
    renders(todos,filter)
    e.target.elements.input1.value = '';

})


document.querySelector("#show-completed").addEventListener('change',function(e){
    filter.hideCompleted = e.target.checked
    renders(todos,filter)
})