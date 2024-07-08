document.addEventListener("DOMContentLoaded", function() {
    const playButton = document.getElementById('playButton');
    const image = document.getElementById('image');
    const audio = document.getElementById('audio');

    playButton.addEventListener('click', function() {
        // Show the image
        image.classList.remove('hidden');

        // Play the audio
        audio.play();
    });

    // Optional: If you want to hide the image and pause the audio when button is clicked again
    playButton.addEventListener('click', function() {
        image.classList.add('hidden');
        audio.pause();
        audio.currentTime = 0; // Reset audio to beginning
    });
});
