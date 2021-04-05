function addItem() {
    const inputText = document.getElementById('newItemText');
    const inputValue = document.getElementById('newItemValue');
    const menu = document.getElementById('menu');
    const optionEl = document.createElement('option');
    optionEl.textContent = inputText.value;
    optionEl.value = inputValue.value;
    menu.appendChild(optionEl);
    inputText.value = '';
    inputValue.value = '';
}