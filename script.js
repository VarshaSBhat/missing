function updateTimer() {
    const startDate = new Date();
    startDate.setHours(7, 12, 0, 0); 

    const now = new Date();
    const difference = now - startDate;

    const seconds = Math.floor((difference / 1000) % 60);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    document.getElementById('timer').innerHTML = 
        `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
    document.getElementById('foundButton').addEventListener('click', function() {
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    });
}




setInterval(updateTimer, 1000);
