const clock = document.querySelector('[clock]'),
    btnInit = document.querySelector('[btn-init]'),
    btnPause = document.querySelector('[btn-pause]'),
    btnStop = document.querySelector('[btn-stop]');
let seconds = 0,
    timer;
    
const initializeClock = () => {
    timer = setInterval(
        () => {
            seconds++;
            clock.innerHTML = getTimeOfSeconds(seconds);
        }, 1000
    );
}


btnInit.onclick = () => {
    clearInterval(timer);
    initializeClock();
    clock.classList.remove('alert-danger', 'alert-warning');
}

btnStop.onclick = () => {
    clock.classList.remove('alert-warning');
    clock.classList.add('alert-danger');
    clearInterval(timer);
    clock.innerHTML = '00:00:00';
    seconds = 0;
}

btnPause.onclick = () => {
    clock.classList.remove('alert-danger');
    clock.classList.add('alert-warning');
    clearInterval(timer);

}

const getTimeOfSeconds = (segundos) => {
    const date = new Date(segundos * 1000);
    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}