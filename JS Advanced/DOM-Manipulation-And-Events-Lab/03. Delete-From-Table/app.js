function deleteByEmail() {
    let input = document.querySelector('input[name="email"]');
    let email = input.value;
    let rows = Array.from(document.querySelectorAll('tbody tr'));
    for (let row of rows) {
        if (row.textContent.includes(email)) {
            row.remove();
            document.getElementById('result').textContent = 'Deleted';
        } else {
            document.getElementById('result').textContent = 'Not found.';
        }
    }
}