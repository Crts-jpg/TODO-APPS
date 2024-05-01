function addItem() {
    var input = document.getElementById('todoInput');
    var newItem = input.value.trim();
    if (newItem) {
        var li = document.createElement('li');
        li.textContent = newItem;
        li.onclick = function() {
            this.classList.toggle('taskDone');
        };
        document.getElementById('todoList').appendChild(li);
        input.value = ''; // Clear input field after adding
    }
}


function clearDone() {
    var list = document.getElementById('todoList');
    var items = list.getElementsByTagName('li');
    for (var i = items.length - 1; i >= 0; i--) {
        if (items[i].classList.contains('taskDone')) {
            list.removeChild(items[i]);
        }
    }
}

function sortTasks() {
    var list = document.getElementById('todoList');
    var items = Array.from(list.getElementsByTagName('li'));
    items.sort(function(a, b) {
        return a.textContent.localeCompare(b.textContent);
    });
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    items.forEach(function(item) {
        list.appendChild(item);
    });
}