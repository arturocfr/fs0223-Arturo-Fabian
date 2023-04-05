/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let num_1 =5;
let num_2 = 3;

if(num_1 > num_2){
  console.log(`${num_1} è maggiore di ${num_2}`);
}else{
  console.log(`${num_2} non è maggiore di ${num_2}`);
}


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
let numero = 10;
if(numero != 5)
console.log('not equal')


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
{
  let numero = 10;
  if(!(numero % 5)){
    console.log('divisibile per 5');
  }
}


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
{
let num1= 18;
let num2= 10;

if(num1 == 8){
  console.log(`${num1} è uguale a 8`);
}else{
  console.log(`${num1} non è uguale a 8`);
}


if(num2 == 8){
  console.log(`${num2} è uguale a 8`);
}else{
  console.log(`${num2} non è uguale a 8`);

}
if(num1 + num2 == 8 || num1 - num2 == 8 ){
  console.log(" Una delle operazione ha dato risultato 8");
}else{
  console.log("Nessuna delle operazione ha dato risultato 8");

}
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
{
  let totalShoppingCart = 70;
  let spedizioneGratuita = false;
  if (totalShoppingCart > 50){
    spedizioneGratuita = true;

  }else{
    spedizioneGratuita = false;
  }
  if (spedizioneGratuita){
    console.log(`L'ammontare totale da addebitare è solo ${totalShoppingCart}, spedizione gratuita`)
  }else{
    console.log(`L'ammontare totale da addebitare è ${totalShoppingCart}, + 10 euro di spedizione, per un totale di ${totale}`);
  }
}


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

{
  let totalShoppingCart = 70;
  let spedizioneGratuita = false;
  if (totalShoppingCart > 50){
    spedizioneGratuita = true;

  }else{
    spedizioneGratuita = false;
  }

  if (spedizioneGratuita){
    let sconto = (totalShoppingCart * 20) / 100;
    let totale = totalShoppingCart - sconto;
    console.log(`L'ammontare totale da addebitare è solo ${totalShoppingCart}, spedizione gratuita e sconto applicato`)
  }else{
    let totale = totalShoppingCart + 10;
    let sconto = (totale * 20) / 100;
    let totaleUltimo = totale - sconto;
    console.log(`L'ammontare totale da addebitare è ${totaleUltimo}, includendo sconto e spedizione`);
  }
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

{
  let variabile_1 = 5;
  let variabile_2 = 20;
  let variabile_3 = 30;

  let valore _alto;
  let arr = [];
  if(variabile_1 > variabile_2 && variabile_1 > variabile_3){
    arr.push(variabile_1);

  }

  }


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
{

let valore = 10;
console.log(typeof valore);

if(typeof valore == "number"){
  console.log("La variabile è un numero!");

}else{
  console.log("La variabile non è un numero!");
}





}



/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/



{
  let numero = 20;
  console.log(numero % 2);
  if{
    console.log("il numero è pari")
  }else{
    console.log("il numero è dispari")
  }


}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
{
let val = 7
if (val < 10 && val > 5) {
    console.log("Meno di 10, ma maggiore di 5");
  } else if (val == 5) {
    console.log("Uguale a 5");
  }else if(val < 5)
  } else {
    console.log("Uguale a 10 o maggiore");
  }

}
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.prop 





/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
delete me.lastName;
console.log(me.lastName);


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop();
console.log(me.skills);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

{
  let arr = [];

  arr.push(1);
  arr.push(2);
  arr.push(3);
  arr.push(4);
  arr.push(5);
  arr.push(6);
  arr.push(7);
  arr.push(8);
  arr.push(9);
  arr.push(10);

  console.log(arr);
}

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

arr[9]
