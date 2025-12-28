function updateClock() {
    const clockElement = document.getElementById('clock');
    const date = new Date();
    let hours = date.getHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');
    let seconds = date.getSeconds().toString().padStart(2, '0');
    const ampm = hours>=12? 'PM':'AM';
    hours = hours>=12?(hours-12).toString().padStart(2, '0'):hours.toString().padStart(2, '0');
    clockElement.innerText = `${hours}: ${minutes}: ${seconds} ${ampm}`;
}

updateClock();
setInterval(updateClock, 1000);