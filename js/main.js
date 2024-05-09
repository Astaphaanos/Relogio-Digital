const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(function time(){
    //pegar a data atual
    let dateToday = new Date();
    let hours = dateToday.getHours();
    let minutes = dateToday.getMinutes();
    let seconds = dateToday.getSeconds();

    //adicionar 0 caso o numero for menor que 10
    if (hours < 10 ) hours = '0' + hours;
    if (minutes < 10 ) minutes = '0' + minutes;
    if (seconds < 10 ) seconds = '0' + seconds;

    //mudar o texto do html
    horas.textContent = hours
    minutos.textContent = minutes
    segundos.textContent = seconds
})