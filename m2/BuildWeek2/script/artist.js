const ENDPOINT = 'https://striveschool-api.herokuapp.com/api/deezer/artist/';
const ENDPOINT_SONG = 'https://striveschool-api.herokuapp.com/api/deezer/artist/';
const artistSection = document.getElementById('dynamic-artist')
// let popular = document.getElementById('popular');
let popularContent;

let addressBarContent = new URLSearchParams(window.location.search);
let artistId = addressBarContent.get('artist_id')
console.log(artistId);

let Matteo = document.getElementById('Matteo')
let albumRef = document.getElementById('album')
let imagineAlbume = document.getElementById('immmagine_album')
let titoloAlbume = document.getElementById('titoloAlbume')
let infoAlbume = document.getElementById('infoAlbume')
let colCentrale = document.getElementById('colCentrale')
let cerca = document.getElementById('cerca')
let cercaBar = document.getElementById('cercaBar')
let searchAppend = document.getElementById('searchAppend')
console.log(cerca);

const getSongs = function(){
    fetch(ENDPOINT_SONG + artistId + '/top?limit=50')
    .then((res) => {
        console.log(res);
        if(res.ok){
            return res.json();
        }
        else throw new Error ('Errore')
    })
    .then((songs) => {
        console.log(songs); 
        let popular = document.getElementById('popular');
        songs.data.forEach((song, i) => {
            popularContent = `
            <div class="row align-items-center my-2">
            <div class="col-10 d-flex align-items-center">
                <p>${i + 1}</p>
                <img src="${song.album.cover}" alt="">
                <div class="d-flex flex-column"> 
                    <p>${song.title}</p>
                    <p class="text-secondary">${song.rank}</p>
                </div>
            </div>
            <div class="col-2">
                <i class="bi bi-three-dots-vertical text-white"></i>
            </div>
        </div>
            ` 
        popular.innerHTML += popularContent
        console.log(popular.innerHTML);
    })
    })
    .catch((err) => {
        console.log(err);
    })
}


const getArtist = function(){
    fetch(ENDPOINT + artistId)
    .then((res) => {
        console.log(res);
        if(res.ok){
            return res.json()
        }
        else throw new Error ('Errore')
    })
    .then((artist) => {
        console.log(artist);
        let artistContent = `
        <div class="row text-white" id='artist' style="background-image: url(${artist.picture_xl});">
        <div class="col">                       
            <h2 class="fs-1">${artist.name}</h2>                
        </div>
        
    </div>
    <div class="row">
        <div class="col">
            <p class="text-secondary fs-5 mt-2">${artist.nb_fan} ascoltatori mensili</p>
        </div>
    </div>
    <div class="row justify-content-between" >
        <div class="col d-flex align-items-center">
            <p class="text-white fs-4 m-0 me-3">Seguiti</p>
            <i class="bi bi-three-dots-vertical text-white"></i>
        </div>
        <div class="col d-flex justify-content-end align-items-center" id="artist-play">
            <i class="bi bi-shuffle mx-3"></i>
            <i class="bi bi-play-circle-fill mx-3"></i>
        </div>
    </div>

    <div class="row d-lg-none">
        <div class="col d-flex align-items-center">
            <div class="col-3 text-center">
                <img src="${artist.picture}" alt=""
                class="w-50 rounded-circle">
            </div>
            <div class="col">
                <p class="text-white m-0">Brani che ti piacciono</p>
                <p class="text-secondary m-0">3 brani di ${artist.name}</p>
            </div>
        </div>
        </div>

        <div class="row my-4 text-white">
        <div class="col-12 col-lg-8" id="popular">
            <h4 class="text-white">Popolari</h4>
           
         </div>
         

     
        </div>
        </div>
        `
        artistSection.innerHTML = artistContent;
        let popular = document.getElementById('popular');
        console.log(popular);
        getSongs()
    })
    .catch((err) => {
        console.log(err);
    })
}

window.onload = () => {
    getArtist()
}

cerca.addEventListener('click', function(){
    cercaBar.classList.toggle('d-none')
    colCentrale.classList.toggle('d-none')
    searchAppend.classList.toggle('d-none')
})


function search() {
    let inputSearch = document.getElementById('inputSearch')
    fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=' + inputSearch.value)
    .then((album) => {
        if(album.ok) {
            return album.json();
        } else {
            throw new Error('800A')
        }
    })
    .then((albume)=>{
        console.log(albume)
        albume.data.forEach((albume) => {
            let row = `<a class="text-decoration-none" href="http://127.0.0.1:5500/album.html?id_album=${albume.album.id}">
            <div class="card bg-dark text-light border-0 shadow-lg m-2" style="width: 12rem;">
            <img src="${albume.artist.picture_big}" class="card-img-top rounded-circle img-fluid p-2" alt="pinguini">
            <div class="card-body">
              <p class="card-text fw-bold">${albume.artist.name}</p>
              <p class="card-text cardTitle">${albume.album.title}</p>
            </div>
          </div></a>`
            searchAppend.innerHTML += row
            let cardTitle = document.querySelectorAll('.cardTitle')
            console.log(cardTitle); 
            
        })})
        .catch((err) => {
            console.log(err)
        })
        searchAppend.innerHTML = ''
    }


    const debounce = (func, wait, immediate) => {
        let timeout
      
        return function() {
        const context = this, args = arguments
        const later = function() {
            timeout = null
            if (!immediate) func.apply(context, args)
        }
        const callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
        }
    }

    let inputSearch = document.getElementById('inputSearch').addEventListener('input', debounce(() => {
        search()
      }, 500))