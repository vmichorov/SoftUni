function focus() {
    Array.from(document.querySelectorAll('input')).forEach(input => {
        input.addEventListener('focus', onFocus);
        input.addEventListener('blur', onBlur);
    })

    function onFocus(ev) {
        ev.target.parentNode.className = 'focused';
    }

    function onBlur(ev) {
        ev.target.parentNode.className = '';
    }
}