function attachGradientEvents() {
    document.getElementById('gradient').addEventListener('mousemove', onMove);
    let result = document.getElementById('result');

    function onMove(ev) {
        let xOff = ev.pageX - ev.target.offsetLeft;
        let percent = Math.floor(xOff / ev.target.clientWidth * 100);
        result.textContent = `${percent}%`;
    }
}