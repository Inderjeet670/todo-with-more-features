const getSavedTodos = function(){
    const todosJSON = localStorage.getItem('todos')
    main = []
    if(todosJSON !== null){
        return JSON.parse(todosJSON)
    }else{
        return[]
    }
}

const saveTodos = function(todos){
    localStorage.setItem('todos',JSON.stringify(todos))

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
    
    document.querySelector('.todo').appendChild(generateSummaryDOM(incompleteTodos))

    filtered.forEach(function (todo) {
        
        document.querySelector('.todo').appendChild(generateTodoDOM(todo))
    })
}


const generateTodoDOM = function(todo){
    const p = document.createElement('div')
    const deleteButton = document.createElement('button')
    const text = document.createElement('span')
    const checkbox = document.createElement('input')
    checkbox.setAttribute('type','checkbox')
    text.textContent = todo.text
    deleteButton.textContent = "delete"
    p.appendChild(checkbox)
    p.appendChild(text)
    p.appendChild(deleteButton)
    deleteButton.addEventListener('click',function(e){
        removeTodo(todo.id)
        saveTodos()
        renders(todos,filter)
    })

        return p;
}

const generateSummaryDOM = function(incompleteTodos){
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`

    return summary;
}

const removeTodo = function(id){
    const indexTodo = todos.findIndex(function(todo){
        return todo.id === id
            
    })
    if(indexTodo > -1){
        todos.splice(indexTodo,1)
    }
}