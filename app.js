const formAddTodo = document.querySelector('.form-add-todo')
const inputSearchTodo = document.querySelector('.form-search input')
const todosContainer = document.querySelector('.todos-container')

formAddTodo.addEventListener('submit', event => {
    event.preventDefault()

    const inputValue = event.target.add.value.trim()
    if(inputValue.length) {
        todosContainer.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${inputValue}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>
      `
      event.target.reset()
    }
})


todosContainer.addEventListener('click', event => {
  const clickElement = event.target

  if(Array.from(clickElement.classList).includes('delete')) {
    clickElement.parentElement.remove()
  }
})

inputSearchTodo.addEventListener('input', event => {

  const inputValue= event.target.value.trim()
  Array.from(todosContainer.children)
    .filter(todo => !todo.textContent.includes(inputValue))
    .forEach(todo => {
      todo.classList.remove('d-flex')
      todo.classList.add('hidden')
    })
    
  Array.from(todosContainer.children)
    .filter(todo => todo.textContent.includes(inputValue))
    .forEach(todo => {
      todo.classList.remove('hidden')
      todo.classList.add('d-flex')
    })
})



