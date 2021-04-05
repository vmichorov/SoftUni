function validate() {
    let regex = /[a-z]+@[a-z]+\.[a-z]+/;
    document.getElementById('email').addEventListener('change', onChange);

    function onChange(ev) {
        let email = ev.target.value;
        if (regex.test(email)) {
            ev.target.className = '';
        } else {
            ev.target.className = 'error';
        }
    }
}