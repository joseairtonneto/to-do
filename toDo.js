var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#newToDo');
var buttonElement = document.querySelector('#addNewToDo');

var toDos = JSON.parse(localStorage.getItem('list_ToDos')) || [];

function renderToDos() {
    listElement.innerHTML = '';

    for(toDo of toDos) {
        var toDoElement = document.createElement('li');
        var toDoText = document.createTextNode(toDo);

        var buttonDeleteToDoElement = document.createElement('button');

        var pos = toDos.indexOf(toDo);
        buttonDeleteToDoElement.setAttribute('onclick', `deleteToDos(${pos})`);
        
        var buttonDeleteToDoText = document.createTextNode('Excluir');

        buttonDeleteToDoElement.appendChild(buttonDeleteToDoText);

        toDoElement.appendChild(toDoText);
        toDoElement.appendChild(buttonDeleteToDoElement);

        listElement.appendChild(toDoElement);
    }
}

renderToDos();

function addToDo() {
    var toDoText = inputElement.value;

    toDos.push(toDoText);
    inputElement.value = '';
    renderToDos();
    saveToStorage()
}

buttonElement.onclick = addToDo;

function deleteToDos(pos) {
    toDos.splice(pos, 1);
    renderToDos();
    saveToStorage()
}

function saveToStorage() {
    localStorage.setItem('list_ToDos', JSON.stringify(toDos));
}