/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

      const changeTitle = function () {
         document.querySelector('h1').textContent = "Javascript!";
      }
      
      changeTitle();


 
   
       /* ESERCIZIO 2
          Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
       */
   
      const addClassToTitle = function () {
         document.querySelector(`h1`).classList.add(`myHeading`);
      }
      
      addClassToTitle();
   
   
       
   
       /* ESERCIZIO 3
          Scrivi una funzione per che cambi il testo dei p figli di un div
         */
   
      const changePcontent = function () {
         let pArr = document.querySelectorAll('div p');
         for (let el of pArr) {
         el.textContent = "Modifica del testo in p";
         }
      }
     
     changePcontent();
   
   
   
       /* ESERCIZIO 4
          Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
         */
          const changeUrls = function () {
            let aArr = document.querySelectorAll('a:not(footer a)');
            for (let a of aArr) {
            a.href = "https://www.google.com";
            }
         }
        
        changeUrls();
   
      
     
   
       
   
       /* ESERCIZIO 5
          Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
       */
   
      const addToTheSecond = function () {
         let uArr = document.querySelectorAll('ul');
         let newL = document.createElement('li');
         newL.textContent = "4th";
         uArr[1].append(newL);
      }
     
      addToTheSecond();
   
   
   
       /* ESERCIZIO 6
          Scrivi una funzione che aggiunga un secondo paragrafo al primo div
       */
   
      const addParagraph = function () {
         let fDiv = document.querySelector('div');
         let newP = document.createElement('p');
         newP.textContent = "Secondo paragrafo "
         fDiv.append(newP);
      }
     
      addParagraph();
   
   
      
   
       /* ESERCIZIO 7
          Scrivi una funzione che faccia scomparire la prima lista non ordinata
       */
   
      const hideFirstUl = function () {
         document.querySelector('ul').style.display = 'none';
      }
      
      hideFirstUl();
   
   
       
   
       /* ESERCIZIO 8 
          Scrivi una funzione che renda verde il background di ogni lista non ordinata
         */
   
      const paintItGreen = function () {
         let uArr = document.querySelectorAll('ul');
         uArr.forEach((v) => v.style.backgroundColor = "green");
      }
     
      paintItGreen();
   
   
      
   
       /* ESERCIZIO 9
          Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
         */
      let h1 = document.querySelector('h1');
      const makeItClickable = function () {
         h1.textContent = h1.textContent.substring(0, h1.textContent.length - 1);
      }
      
      h1.addEventListener('click', makeItClickable);
   
       /* ESERCIZIO 10
          Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
         */
   
      const revealFooterLink = function () {
         let myA = myFooter.querySelector('a');
         alert(myA.href);
      }
        
      myFooter.addEventListener('click', revealFooterLink);
   
   

   
       /* ESERCIZIO 11
          Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
          La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
       */
   
       const generateTable = function () {
   
   
       }
   
       /* ESERCIZIO 12
          Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
       */
   
       const addRow = function () {
   
   
       }
   
       /* ESERCIZIO 14
         Crea una funzione che nasconda le immagini della tabella quando eseguita
       */
   
       const hideAllImages = function () {
   
   
       }
   
       /* EXTRA ESERCIZIO 15
         Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
       */
   
       const changeColorWithRandom = function () {
   
   
       }
   
       /* EXTRA ESERCIZIO 16
         Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
       */
   
       const deleteVowels = function () {
   
   
       }
   