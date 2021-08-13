let todos = getSavedTodos()


const filter = {
    search: '',
    hideCompleted: false

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
    saveTodos(todos)
    renders(todos,filter)
    e.target.elements.input1.value = '';

})


document.querySelector("#show-completed").addEventListener('change',function(e){
    filter.hideCompleted = e.target.checked
    renders(todos,filter)
})