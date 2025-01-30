function currentTimeUTC() {
    const now = new Date();
    const utcTime = now.toUTCString();
    document.getElementById('currentTime').textContent = utcTime;
  }
  
  setInterval(currentTimeUTC, 1000);
  
  currentTimeUTC();