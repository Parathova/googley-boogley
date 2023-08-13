document.addEventListener('DOMContentLoaded', function() {
    const playImage = document.getElementById('playImage');
    const pauseImage = document.getElementById('pauseImage');
    const audioPlayer = document.getElementById('audioPlayer');
    const currentFileDisplay = document.getElementById("currentFile");
    const playlist = [
        "Believe in Miracle.mp3",
        "Close Study.mp3",
        "Coding Night.mp3",
        "Inspiring Atmosphere.mp3",
        "Just Relax.mp3",
        "Nature-9.mp3",
        "Lofi Girl Dreams.mp3",
        "Love Romantic.mp3",
        "Shooting Stars.mp3",
        "Untitled Track.mp3",
        "Nature.mp3"
    ]

    let i = 0;
    let start = false;
    function nextSong(play=true){
        audioPlayer.src = "Assets/Tracks/" + playlist[i];
        if(play) audioPlayer.play();
        currentFileDisplay.textContent = `Playing: ${playlist[i]}`;
        if(play) {
            i = (i+1) % playlist.length;
            console.log("nextsong");
        }
    }


    audioPlayer.volume = 0.2;
    audioPlayer.addEventListener('ended', nextSong(true));
    playImage.addEventListener('click', function() {
        if(!start){
            //nextSong(true);
            start = true;
        }
        audioPlayer.play();
        playImage.style.display = 'none';   // Hide play image
        pauseImage.style.display = 'block'; // Show pause image
        
    });

    pauseImage.addEventListener('click', function() {
        audioPlayer.pause();
        playImage.style.display = 'block';  // Show play image
        pauseImage.style.display = 'none';  // Hide pause image
        
    });


    nextSong(false);
});
