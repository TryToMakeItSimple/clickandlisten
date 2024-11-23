const audioPlayer = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const songTitle = document.getElementById('song-title');
const artist = document.getElementById('artist');

const songs = [{
        "title": "Paraluman",
        "artist": "Arthur Nery",
        "file": "Paraluman.mp3"
    },
    {
        "title": "Pagsamo",
        "artist": "Arthur Nery",
        "file": "Pagsamo.mp3"
    },
    {
        "title": "Binhi",
        "artist": "Arthur Nery",
        "file": "Binhi.mp3"
    },
    {
        "title": "Higa",
        "artist": "Arthur Nery",
        "file": "Higa.mp3"
    },
    {
        "title": "Panaginip",
        "artist": "Iluna",
        "file": "Panaginip.mp3"
    },
    {
        "title": "Paninindigan Kita",
        "artist": "Ben and Ben",
        "file": "Paninindigan Kita.mp3"
    },
    {
        "title": "Pano",
        "artist": "Zack Tabudlo",
        "file": "Pano.mp3"
    },
    {
        "title": "Pasilyo",
        "artist": "Sunkissed Lola",
        "file": "Pasilyo.mp3"
    },
    {
        "title": "Take All The Love",
        "artist": "Arthur Nery",
        "file": "TATL.mp3"
    },
    {
        "title": "Uhaw",
        "artist": "Dilaw",
        "file": "Uhaw.mp3"
    },
];

let currentSongIndex = 0;

function loadSong() {
    const currentSong = songs[currentSongIndex];
    const songPath = `/mp3_music/${currentSong.file}`;
    audioPlayer.src = songPath;

    songTitle.textContent = currentSong.title;
    artist.textContent = currentSong.artist;
}

function playPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        audioPlayer.pause();
        playPauseBtn.textContent = 'Play';
    }
}

function playNextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong();
    audioPlayer.play();
    playPauseBtn.textContent = 'Pause';
}

function playPreviousSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong();
    audioPlayer.play();
    playPauseBtn.textContent = 'Pause';
}

// Event Listeners
audioPlayer.addEventListener('ended', playNextSong);
playPauseBtn.addEventListener('click', playPause);
prevBtn.addEventListener('click', playPreviousSong);
nextBtn.addEventListener('click', playNextSong);

// Initial Setup
loadSong();

// Debugging: Log JSON string of songs
const jsonString = JSON.stringify(songs, null, 2);
console.log(jsonString);