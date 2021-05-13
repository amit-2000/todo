// selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


todoButton.addEventListener('click', addtodo)


function addtodo(event) {
    console.log('todo added')
    event.preventDefault();
    // todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add('todo');
    // new Todo
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-Item')
    todoDiv.appendChild(newTodo);
    // check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML='<p>add</p>';
    completedButton.classList.add('complete-btn')
    todoDiv.appendChild(completedButton)
    // delete button
    const trashButton = document.createElement('button');
    trashButton.innerHTML='<p>dele</p>'
    trashButton.classList.add('delete-btn')
    todoDiv.appendChild(trashButton)

    todoList.appendChild(todoDiv);
    // clear input
    todoInput.value ="";
}
todoList.addEventListener('click', deleBtn);

function deleBtn(event){
    // console.log(event.target);
    const item = event.target;
    // Delete
    if (item.classList[0] ==='delete-btn'){
        const todo = item.parentElement;
        todo.classList.add("fall")
        setTimeout(() => {
            todo.remove();
        }, 300);
    }
    // checkmark or complete button
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

}