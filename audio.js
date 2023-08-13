document.addEventListener('DOMContentLoaded', function() {
    const playImage = document.getElementById('playImage');
    const pauseImage = document.getElementById('pauseImage');
    const audioPlayer = document.getElementById('audioPlayer');

    playImage.addEventListener('click', function() {
    
        audioPlayer.play();
        playImage.style.display = 'none';   // Hide play image
        pauseImage.style.display = 'block'; // Show pause image
        
    });

    pauseImage.addEventListener('click', function() {
        audioPlayer.pause();
        playImage.style.display = 'block';  // Show play image
        pauseImage.style.display = 'none';  // Hide pause image
        
    });
});
