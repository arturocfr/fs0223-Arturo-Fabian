
let corpo4 = document.querySelector('.background');
let centro4 = document.createElement("div");
centro4.classList.add("centro");




function pagina4() {
  

//   creazione contenitore



// creazione blocco centrale

corpo4.append(centro4);

let titolo = document.createElement("p");
titolo.classList.add("title-star");
titolo.textContent="Tell us how it's going";
centro4.append(titolo);

let subtitolo = document.createElement("p");
subtitolo.classList.add("subtitle-star");
subtitolo.textContent=`From 0 to 10,how likely are you to recommend EPICODE`;
centro4.append(subtitolo);

let subtitolo2 = document.createElement("p");
subtitolo2.classList.add("subtitle-star2");
subtitolo2.textContent=`to a friend or a colleague?`;
subtitolo.append(subtitolo2);

let starRating = document.createElement("div");
starRating.classList.add("star-rating");

centro4.append(starRating);

let stella5 = document.createElement("div");
stella5.classList.add("fastar");
starRating.append(stella5);

let subp = document.createElement("p");
subp.classList.add("subtitle-star3");
subp.textContent="Leave us an open feedback about your experience so far";
centro4.append(subp);

let context = document.createElement("div");
context.classList.add("cont-text");
centro4.append(context);

let input = document.createElement("input");
input.classList.add("textarea");
input.placeholder="Write your comment here"

context.append(input);


let contbottone = document.createElement("div");
contbottone.classList.add("cont-bottone2");
centro4.append(contbottone);

let bottone = document.createElement("button");
bottone.classList.add("bottone2");
bottone.textContent="MORE INFO";
bottone.onclick=function(){window.open('https://epicode.com/it/community/', '_blank');}

contbottone.append(bottone);

// fare 10 stelle
for (let i = 0; i < 9; i++) {
    let stella5 = document.createElement("div");
    stella5.classList.add("fastar");
    starRating.append(stella5);
  }




// funzione di selezioe stelle
const starContainer = document.querySelector('#star-container');

const stars = document.querySelectorAll('.fastar');
stars.forEach((star,index1) =>{
  star.addEventListener("click",() =>{
    stars.forEach((star,index2) =>{
      index1 >= index2 ? star.classList.add("selected") : star.classList.remove("selected")
  })
})
})



}