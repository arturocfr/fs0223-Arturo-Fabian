/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
//function stringaConcatenata(str, str1) {
 //* let x = str.stringa(0,2);
  //let y = str1.stringa(str1.length - 3, str1.length);
  //return x.concat(y).toUpperCase();
//}
//console.log(`Il risultato è  + ${stringaConcatenata("ciao","bella")}`);

/* ESERCIZIO 2
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
function giveRandomArr() {
  let arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 100) + 1);
  }
  return arr;
}
console.log(`Ecco il nostro array con 10 elementi random:`);
console.log(giveRandomArr());

/* ESERCIZIO 3
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici (suggerimento: il metodo filter può aiutare)
*/
function iHateOddsNumbers() {
  let arr = [1, 4, 54, 32, 21, 101, 97, 27, 298, 1009, 2900];

  let newArr = arr.filter(el => !(el % 2));

  return newArr;
}
console.log(`I numeri pari nell'array sono: ${iHateOddsNumbers()}`);

/* ESERCIZIO 4
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
function sommaTutto() {
  let arr = [1, 2, 14, 342, 21, 2021, 77, 227, 698, 1009, 500];
  let res = 0;

  for (el of arr) {
    res += el;
  }
  return res;
}
/* ESERCIZIO 5
  Scrivi una funzione per sommare i numeri contenuti in un array (usare REDUCE)
*/
function sommaTuttoMaReduce() {
  let arr = [1, 4, 54, 32, 21, 101, 97, 27, 298, 1009, 2900];
  return arr.reduce((p, c) => p + c);
}

console.log(`La somma di tutti i valori nell'array usando .reduce è ${sommaTuttoMaReduce()}`);

/* ESERCIZIO 6
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/
function yetAnotherSommaStrange(arrIn, num) {
  return arrIn.map(v => v + num);
}


let myArr = [1, 4, 54, 32, 21, 101, 97, 27, 298, 1009, 2900];
console.log(`Il risultato dell'operazione è:`);
console.log(yetAnotherSommaStrange(myArr, 100));


/* ESERCIZIO 8
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
function iLoveOddsNumber() {
  let arr = [];
  for (let i = 1; i < 100; i+=2) {
    arr.push(i);
  }
  return arr;
}

console.log('Ecco tutti i numeri da 1 99, ma solo quelli dispari!');
console.log(iLoveOddsNumber());


/* ESERCIZIO 9
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg"
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg"
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg"
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg"
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
  }
];





/* ESERCIZIO 10
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
function getTitlesOnly() {
  return movies.map(el => el.Title);
}

console.log("Ecco la lista di tutti i titoli dei film nell'array");
console.log(getTitlesOnly());


/* ESERCIZIO 11
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
function howManyMovies() {
  return movies.length;
}



console.log(`Il numero di Film nell'array è ${howManyMovies()}`);

/* ESERCIZIO 12
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
function getTitlesOnly() {
  return movies.map(el => el.Title);
}

console.log("Ecco la lista di tutti i titoli dei film nell'array");
console.log(getTitlesOnly());



/* ESERCIZIO 13
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

function getMillennialMovies() {
  return movies.filter(el => el.Year >= 2000);
}

console.log("Ecco la lista dei film usciti dal 2000 in poi:");
console.log(getMillennialMovies());

/* ESERCIZIO 14
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/


/* ESERCIZIO 15
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
