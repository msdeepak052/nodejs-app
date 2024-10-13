// public/script.js
let is24HourFormat = false;

function updateClock() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = now.toLocaleDateString(undefined, options);
    
    const hours = is24HourFormat ? now.getHours() : (now.getHours() % 12 || 12);
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = !is24HourFormat && now.getHours() >= 12 ? ' PM' : ' AM';

    document.getElementById('clock').innerHTML = `
        <strong>${date}</strong><br>
        ${hours}:${minutes}:${seconds}${ampm}
    `;
}

function toggleClockFormat() {
    is24HourFormat = !is24HourFormat;
    updateClock();
}

// Update the clock every second
setInterval(updateClock, 1000);

// Call the update function once to set the initial time
updateClock();

