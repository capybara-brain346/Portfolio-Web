function updateTime() {
    const timeDisplay = document.getElementById('time-display');
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'Asia/Kolkata' };
    const kolkataTime = now.toLocaleTimeString('en-US', options);
    timeDisplay.textContent = kolkataTime;
}

setInterval(updateTime, 1000);
updateTime(); // initial call to display time immediately on load
