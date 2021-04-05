function attachEventsListeners() {
    const btnArray = Array.from(document.querySelectorAll('input[type="button"]'));
    for (const button of btnArray) {
        button.addEventListener('click', onClick);
    }

    function onClick(ev) {
        const btnId = ev.target.id;
        let days;
        let hours;
        let minutes;
        let seconds;
        switch (btnId) {
            case 'daysBtn':
                days = Number(document.getElementById('days').value);
                Math.floor(hours = days * 24);
                Math.floor(minutes = hours * 60);
                Math.floor(seconds = minutes * 60);
                document.getElementById('hours').value = hours;
                document.getElementById('minutes').value = minutes;
                document.getElementById('seconds').value = seconds;
                break;
            case 'hoursBtn':
                hours = Number(document.getElementById('hours').value);
                Math.floor(days = Math.floor(hours / 24));
                Math.floor(minutes = hours * 60);
                Math.floor(seconds = minutes * 60);
                document.getElementById('days').value = days;
                document.getElementById('minutes').value = minutes;
                document.getElementById('seconds').value = seconds;
                break;
            case 'minutesBtn':
                minutes = Number(document.getElementById('minutes').value);
                Math.floor(seconds = minutes * 60);
                Math.floor(hours = minutes / 60);
                Math.floor(days = hours / 24);
                document.getElementById('days').value = days;
                document.getElementById('hours').value = hours;
                document.getElementById('seconds').value = seconds;
                break;
            case 'secondsBtn':
                seconds = Number(document.getElementById('seconds').value);
                Math.floor(minutes = seconds / 60);
                Math.floor(hours = minutes / 60);
                Math.floor(days = hours / 24);
                document.getElementById('days').value = days;
                document.getElementById('hours').value = hours;
                document.getElementById('minutes').value = minutes;
                break;
        }
    }
}