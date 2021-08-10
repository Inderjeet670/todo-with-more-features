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
    search: '',
    hideCompleted: false

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
    e.target.elements.input1.value = '';
    renders(todos,filter)
})


document.querySelector("#show-completed").addEventListener('change',function(e){
    filter.hideCompleted = e.target.checked
    renders(todos,filter)
})