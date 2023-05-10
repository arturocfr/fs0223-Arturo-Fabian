fetch('https://striveschool-api.herokuapp.com/books')
.then(response =>{
    if(response.ok){return response.json()}
    else{throw new Error(response);}
})
.then((movies) =>{
    console.log(movies);
    movies.forEach((movie) => {
        let col = document.createElement('div');
        col.classList.add('col-6');
        col.classList.add('col-md-4');
        col.classList.add('col-lg-3');
        let card = document.createElement('div');
        card.classList.add('card');
        let imgMovie = document.createElement('img');
        imgMovie.classList.add('img-fluid');
        imgMovie.src = movie.img;
        let bodyCard = document.createElement('div');
        bodyCard.classList.add('card-body');
        let titleCard = document.createElement('h5');
        titleCard.classList.add('card-title');
        titleCard.innerHTML = movie.title;
        let priceCard = document.createElement('p');
        priceCard.classList.add('card-text');
        priceCard.innerHTML = movie.price + '$';
        buttonCard = document.createElement('a');
        buttonCard.classList.add('btn');
        buttonCard.classList.add('btn-primary');
        buttonCard.innerHTML = 'Scarta'
        buttonCard.addEventListener('click', () => {
            col.remove();});
        let riga = document.getElementById('row');
        riga.appendChild(col);
        col.appendChild(card);
        card.appendChild(imgMovie);
        card.appendChild(bodyCard);
        bodyCard.appendChild(titleCard)
        bodyCard.appendChild(priceCard);
        bodyCard.appendChild(buttonCard);
        
        let shopBtn = buttonCard = document.createElement('a');
        shopBtn.classList.add('btn');
        shopBtn.classList.add('btn-primary');
        shopBtn.innerHTML = 'Compra ora'
        bodyCard.appendChild(shopBtn);
        shopBtn.addEventListener('click', () => {
            sessionStorage.setItem("MOVIES", []);
            let kart = sessionStorage.getItem("MOVIES");
            kart = JSON.parse(kart)
            kart.push(movie);
            kart = JSON.stringify(kart);
            sessionStorage.setItem("MOVIES", kart);


            // let carrello = document.getElementById('carrello');
            // let newLi = document.createElement('li');
            // newLi.innerHTML = kart;
            // carrello.appendChild(newLi);
        })
    })
})
.catch(err => console.log(err));