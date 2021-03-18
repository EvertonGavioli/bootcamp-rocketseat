var ulElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem("list_todos")) || [];

function renderTodos() {
    ulElement.innerHTML = "";

    todos.forEach(todoElement => {
        var liElement = document.createElement("li");
        liElement.appendChild(document.createTextNode(todoElement));

        var excluirElement = document.createElement("a");
        excluirElement.appendChild(document.createTextNode("Excluir"));
        excluirElement.setAttribute("href", "#");

        var pos = todos.indexOf(todoElement);
        excluirElement.setAttribute("onclick", 'deleteTodo(' + pos + ')');

        liElement.appendChild(excluirElement);

        ulElement.appendChild(liElement);
    });
}

renderTodos();

buttonElement.onclick = addTodo;

function addTodo() {
    var novoTodo = inputElement.value;

    if (novoTodo == null || novoTodo == '') {
        return;
    }

    todos.push(novoTodo);
    inputElement.value = "";

    renderTodos();
    saveToStorage();

    inputElement.focus();
}

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();

    inputElement.focus();
}

function saveToStorage() {
    localStorage.setItem("list_todos", JSON.stringify(todos));
}