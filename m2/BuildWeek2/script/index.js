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