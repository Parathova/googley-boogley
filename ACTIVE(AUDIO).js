



document.addEventListener('DOMContentLoaded', function() {
    const playImage = document.getElementById('playImage');
    const pauseImage = document.getElementById('pauseImage');
    const audioPlayer = document.getElementById('audioPlayer');
    const currentFileDisplay = document.getElementById("currentFile");
    const playlist = [
        /*"Record (online-voice-recorder.com).mp3",*/
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
        "Nature.mp3",
        "Lofi Study.mp3",
        "Lofi Chill.mp3",
        "Please Calm My Mind.mp3",
        "Empty Hour.mp3",
        "Valley of Hope.mp3",
        "Sleepy Cat.mp3",
        "Motivated To Create.mp3",
        "Wish You Were Here.mp3",
        "BeethovenSymphony9Mvt4.mp3"
    ]

    let i = 0;
    let start = false;
    function nextSong(play=true){

        audioPlayer.src = "Assets/Tracks/" + playlist[i];
        if(play) {
            audioPlayer.play();
            /*chrome.runtime.sendMessage({ action: 'playMusic' });*/
        }
        let a = playlist[i].length;
        currentFileDisplay.textContent = `${playlist[i]}`.substring(0, a-4);
        
        i = (i+1) % playlist.length;
        console.log("nextsong");
        
    }


    audioPlayer.volume = 0.18;
    
    playImage.addEventListener('click', function() {
       
        audioPlayer.play();
        /*chrome.runtime.sendMessage({ action: 'playMusic' });*/
        playImage.style.display = 'none';   // Hide play image
        pauseImage.style.display = 'block'; // Show pause image
        if(!start){
            start = true;
            audioPlayer.addEventListener('ended', () => nextSong(true));
            console.log("event added");
        }
        
        
    });

    pauseImage.addEventListener('click', function() {
        console.log("paused");
        audioPlayer.pause();
        playImage.style.display = 'block';  // Show play image
        pauseImage.style.display = 'none';  // Hide pause image
        
    });

    console.log("end");
    nextSong(false);
    console.log("end");
    

    
});
