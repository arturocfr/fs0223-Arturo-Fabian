/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/*
String:
Questo tipo di dato è una sequenza di caratteri. E' anche detto alfanumerico.

Number:
Questo tipo di dato è numerico. Può trattarsi di un numero intero (integer) o decimale (floating point). 
Ad esempio, 3.14. In ogni caso javascript tratta tutti i numeri come numeri decimali a virgola mobile anche quando sono interi.

Boolean:
E' il tipo di dato booleano. Può assumere solo i valori true (vero) o false (falso).

Urray:
Un array può contenere più valori all'interno di una singola variabile. Ciò significa che è possibile contenere un elenco di valori all'interno di un array e scorrere attraverso di essi.
Ogni elemento o valore all'interno di un array viene chiamato elemento. È possibile fare riferimento agli elementi di un array utilizzando un numero indice.
Proprio come le stringhe sono definite come caratteri tra virgolette, le matrici sono definite con valori tra parentesi quadre [ ].

Oggetti:
Il tipo di dati oggetto (object) JavaScript può contenere molti valori come coppie nome:valore (name:value).
Queste coppie forniscono un modo utile per archiviare e accedere ai dati. 
La sintassi letterale dell'oggetto è composta da coppie nome:valori separate da due punti con parentesi graffe su entrambi i lati { }


*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let nome = "Arturo";
console.log(nome);


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let numero = 12;
let numero2 = 20;
let somma = numero + numero2;
console.log(somma);

let k = 12 + 20;
console.log(k);


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x = 12;


/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
nome = "Fabian"
console.log();

const cognome = "Fabian"
//cognome = "Rivera"
//console.log(cognome);


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let sottrazione = x - 4
console.log(sottrazione);


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
let name1 = "john"
let name2 = "John"

let result = name1 == name2;
console.log(result);
document.getElementById('test').innerHTML = 'Il risultato è ' + result;

let result_2 = name1.toLowerCase() == name2.toLowerCase();
console.log(result_2);



