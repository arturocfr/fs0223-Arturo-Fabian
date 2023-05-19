let Matteo = document.getElementById('Matteo')
let albumRef = document.getElementById('album')
let imagineAlbume = document.getElementById('immmagine_album')
let titoloAlbume = document.getElementById('titoloAlbume')
let infoAlbume = document.getElementById('infoAlbume')
let colCentrale = document.getElementById('colCentrale')
let cerca = document.getElementById('cerca')
let cercaBar = document.getElementById('cercaBar')
let searchAppend = document.getElementById('searchAppend')
console.log(cercaBar);

console.log(albumRef)
function truncate(source, size) {
    return source.length > size ? source.slice(0, size - 1) + "…" : source;
    }

    var res = truncate(Matteo.innerHTML, 15);
    Matteo.innerHTML=res
    console.log(res);

let album = 'https://striveschool-api.herokuapp.com/api/deezer/album/'
let albumIdSearch = new URLSearchParams(window.location.search);
console.log(albumIdSearch)
let albumId = albumIdSearch.get('id_album')
console.log(album + albumId)

function convertiSecondiPerBrano(secondi) {
    let minuti = Math.floor((secondi % 3600) / 60);
    let secondiRimanenti = secondi % 60;
  
    let risultato = "";
    if( minuti < 10 ){
        risultato += '0' + minuti + ":";
    }else{
        risultato += minuti + ":";
    }
    if( secondiRimanenti < 10 ){
        risultato += '0' + secondiRimanenti;
    } else{
      risultato += secondiRimanenti;
    }
  
    return risultato;
}

function convertiSecondi(secondi) {
    let ore = Math.floor(secondi / 3600);
    let minuti = Math.floor((secondi % 3600) / 60);
    let secondiRimanenti = secondi % 60;
  
    let risultato = "";
    if (ore > 0) {
        if(ore == 1){
            risultato += ore + " ora ";
        }else{
            risultato += ore + " ore ";
        }
    }
    if (minuti > 0) {
      risultato += minuti + " min ";
    }
    if (secondiRimanenti > 0) {
      risultato += secondiRimanenti + " sec";
    }
  
    return risultato;
}


let getAlbum = function () {
    fetch(album + albumId)
    .then((album) => {
        if(album.ok) {
            return album.json();
        } else {
            throw new Error('800A')
        }
    })
    .then((albume) => {
        console.log(albume)
        imagineAlbume.src = albume.cover_big
        titoloAlbume.innerHTML = albume.title
        infoAlbume.innerHTML = `<img src="${albume.artist.picture}" style="width:20px;" class="rounded-circle" alt=""/> ${albume.artist.name} · ${albume['release_date'].slice(0,4)}  · ${albume['nb_tracks']} , ${convertiSecondi(albume.duration)}`
        albume.tracks.data.forEach((album ,i) => {
            let row = `<div class="row mx-2 hover_row text-white align-items-center my-3">
            <div class="col ms-3 d-flex align-items-center">
                <p class="pe-3 m-0">${i += 1}</p> 
                <span class="d-flex flex-column">
                    <p class="m-0">${album.title}</p> 
                    <p class="m-0">${album.artist.name}</p> 
                </span>
            </div>
            <div class="col text-end">
                ${album.rank}
            </div>
            <div class="col text-end me-5">
                ${convertiSecondiPerBrano(album.duration)}
            </div>
        </div>`
        albumRef.innerHTML += row
        });
    })
    .catch((err) => {
        console.log(err)
    })
}

getAlbum()


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