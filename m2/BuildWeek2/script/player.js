const audioPlayer = document.getElementById('audio-player');
const playPauseButton = document.querySelector('.play-pause');
const songTitle = document.querySelector('.title');
const songArtist = document.querySelector('.artist');
const songCover = document.querySelector('.image-container img');


const songs = [
    // {
    //     title: 'Bohemian Rhapsody (The Original Soundtrack)',
    //     artist: 'Queen',
    //     src: 'https://cdns-preview-1.dzcdn.net/stream/c-17597947a0fdd6e8ea971f146755cd34-13.mp3',
    //     cover: 'https://e-cdns-images.dzcdn.net/images/cover/8b8fc5d117f9357b79f0a0a410a170e8/56x56-000000-80-0-0.jpg'
    // },
    // {
    //     title: 'Another One Bites The Dust',
    //     artist: 'Queen',
    //     src: 'https://cdns-preview-9.dzcdn.net/stream/c-9cf374f319133b4d8aa8c6a2cb2394cf-8.mp3',
    //     cover: 'https://e-cdns-images.dzcdn.net/images/cover/8b8fc5d117f9357b79f0a0a410a170e8/56x56-000000-80-0-0.jpg'
    // },
    // {
    //     title: 'I Want To Break Free',
    //     artist: 'Giova',
    //     src: 'https://cdns-preview-8.dzcdn.net/stream/c-8a0e9b83879ad692414407cf13cd5ec0-9.mp3',
    //     cover: 'https://e-cdns-images.dzcdn.net/images/artist/1ab642216454f5e5e02c234f93af481c/56x56-000000-80-0-0.jpg'
    // },
    // {
    //     title: 'Under Pressure',
    //     artist: 'Queen',
    //     src: 'https://cdns-preview-8.dzcdn.net/stream/c-863037ab226db2034a8859fe8f860b22-8.mp3',
    //     cover: 'https://e-cdns-images.dzcdn.net/images/artist/1ab642216454f5e5e02c234f93af481c/56x56-000000-80-0-0.jpg'
    // },
    // {
    //     title: 'Who Wants To Live Forever',
    //     artist: 'Queen',
    //     src: 'https://cdns-preview-6.dzcdn.net/stream/c-659f6c96e2a2be9871a2c03dd267b966-8.mp3',
    //     cover: 'https://e-cdns-images.dzcdn.net/images/cover/8b8fc5d117f9357b79f0a0a410a170e8/56x56-000000-80-0-0.jpg'
    // },
    // {
    //     title: 'Radio Ga Ga',
    //     artist: 'Queen',
    //     src: 'https://cdns-preview-3.dzcdn.net/stream/c-3a5eeb8a3f18eb07e25b27e1bb160615-9.mp3',
    //     cover: 'https://e-cdns-images.dzcdn.net/images/cover/8b8fc5d117f9357b79f0a0a410a170e8/56x56-000000-80-0-0.jpg'
    // },
    // {
    //     title: 'The Show Must Go On',
    //     artist: 'Queen',
    //     src: 'https://cdns-preview-9.dzcdn.net/stream/c-933983b04206148e2d2a1b23ddbf9e6c-8.mp3',
    //     cover: 'https://e-cdns-images.dzcdn.net/images/cover/8b8fc5d117f9357b79f0a0a410a170e8/56x56-000000-80-0-0.jpg'
    // },
    // {
    //     title: 'Killer Queen',
    //     artist: 'Queen',
    //     src: 'https://cdns-preview-7.dzcdn.net/stream/c-7347e9b2b7eb3157b9fd696d01dcb0b5-7.mp3',
    //     cover: 'https://e-cdns-images.dzcdn.net/images/cover/8b8fc5d117f9357b79f0a0a410a170e8/56x56-000000-80-0-0.jpg'
    // },
    // {
    //     title: 'Queen of Kings',
    //     artist: 'Alessandra',
    //     src: 'https://cdns-preview-0.dzcdn.net/stream/c-0144c562262a3eeb869ef333aac12246-4.mp3',
    //     cover: 'https://e-cdns-images.dzcdn.net/images/artist/544f3c7162b94781567b0c4bde522278/250x250-000000-80-0-0.jpg'
    // },
    // {
    //     title: 'Another One Bites The Dust',
    //     artist: 'Queen',
    //     src: 'https://cdns-preview-9.dzcdn.net/stream/c-9cf374f319133b4d8aa8c6a2cb2394cf-8.mp3',
    //     cover: 'https://e-cdns-images.dzcdn.net/images/artist/1ab642216454f5e5e02c234f93af481c/56x56-000000-80-0-0.jpg'
    // },
    // Aggiungi altre canzoni qui
];

// const ENDPOINT = 'https://striveschool-api.herokuapp.com/api/deezer/artist/';
const ENDPOINT_PLAYER = 'https://striveschool-api.herokuapp.com/api/deezer/artist/';
// const artistSection = document.getElementById('dynamic-artist')

let addressBarContentPlayer = new URLSearchParams(window.location.search);
let artistIdPlayer = addressBarContentPlayer.get('artist_id')

const playSong = function() {
    fetch(ENDPOINT_PLAYER + artistIdPlayer + '/top?limit=50')
    .then((res) => {
        console.log(res);
        if(res.ok){
            return res.json();
        }
        else throw new Error ('Errore')
    })
    .then((songsPlay) => {
        console.log(songsPlay);
        songsPlay.data.forEach((song) => {
            let oggetto = {
                title: song.title,
                artist: song.artist.name,
                src: song.preview,
                cover: song.album.cover
            }
            songs.push(oggetto)
        })
        changeSong(0); 
        
    })
    .catch((err) => {
        console.log(err);
    })
}
playSong()


function changeSong(index) {
    songTitle.textContent = songs[index].title;
    songArtist.textContent = songs[index].artist;
    songCover.src = songs[index].cover;
    audioPlayer.src = songs[index].src;
}



function togglePlayPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseButton.classList.remove('fa-play');
        playPauseButton.classList.add('fa-pause');
    } else {
        audioPlayer.pause();
        playPauseButton.classList.add('fa-play');
        playPauseButton.classList.remove('fa-pause');
    }
}

playPauseButton.addEventListener('click', togglePlayPause);

let currentSongIndex = 0;

const nextButton = document.querySelector('.fa-step-forward');
const prevButton = document.querySelector('.fa-step-backward');

function playNextSong() {
    currentSongIndex++;
    if (currentSongIndex >= songs.length) {
        currentSongIndex = 0;
    }
    changeSong(currentSongIndex);
    audioPlayer.play();
}

function playPrevSong() {
    currentSongIndex--;
    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1;
    }
    changeSong(currentSongIndex);
    audioPlayer.play();
}

nextButton.addEventListener('click', playNextSong);
prevButton.addEventListener('click', playPrevSong);

const volumeSlider = document.querySelector('.volume-slider');

function setVolume() {
  audioPlayer.volume = volumeSlider.value;
}

volumeSlider.addEventListener('input', setVolume);

const progressBar = document.querySelector('.progress-bar');
const progress = document.querySelector('.progress');
const currentTimeLabel = document.querySelector('.progress-container span:first-child');
const durationTimeLabel = document.querySelector('.progress-container span:last-child');

audioPlayer.addEventListener('timeupdate', updateProgressBar);

function updateProgressBar() {
  const currentTime = audioPlayer.currentTime;
  const duration = audioPlayer.duration;

  if (duration) {
    const progressPercentage = (currentTime / duration) * 100;
    progress.style.width = progressPercentage + '%';

    currentTimeLabel.textContent = formatTime(currentTime);
    durationTimeLabel.textContent = formatTime(duration);
  }
}

function formatTime(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}

progressBar.addEventListener('click', (event) => {
  const progressBarRect = progressBar.getBoundingClientRect();
  const clickPosition = event.clientX - progressBarRect.left;
  const progressBarWidth = progressBarRect.width;

  const clickPercentage = clickPosition / progressBarWidth;
  const newTime = audioPlayer.duration * clickPercentage;

  audioPlayer.currentTime = newTime;
});

window.onload = () => {
    playSong()
}