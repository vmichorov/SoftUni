function addItem() {
    let input = document.getElementById('newText');
    let liElement = document.createElement('li');
    liElement.textContent = input.value;
    let deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = '#';
    deleteBtn.addEventListener('click', onClick);
    liElement.appendChild(deleteBtn);
    let list = document.getElementById('items');
    if (input !== '') {
        list.appendChild(liElement);
    }
    input.value = '';

    function onClick() {
        liElement.remove();
    }
}