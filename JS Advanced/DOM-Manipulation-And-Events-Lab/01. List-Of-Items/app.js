function addItem() {
    let input = document.getElementById('newItemText').value;
    let liElement = document.createElement('li');
    liElement.textContent = input;
    let list = document.getElementById('items');
    if (input !== '') {
        list.appendChild(liElement);
    }
}