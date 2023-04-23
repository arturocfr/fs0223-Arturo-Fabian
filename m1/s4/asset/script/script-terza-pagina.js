

// let bodyTemp = document.querySelector('.background');
let newContainer = document.createElement('div');


newContainer.id = 'content-container';

let firstSection = document.createElement('div');
firstSection.id = "title";

let secondSection = document.createElement('div');
secondSection.id = "result";

let thirdSection = document.createElement('div');
thirdSection.id = "rate";

let firstP = document.createElement('p');
firstP.classList.add("bold");

let secondP = document.createElement('p');
secondP.classList.add("summary");

let firstResult = document.createElement('div');
firstResult.classList.add("perc-result");

let secondResult = document.createElement('div');
secondResult.id = "chart";

let thirdResult = document.createElement('div');
thirdResult.classList.add("perc-result");

let pResult1 = document.createElement('p');
pResult1.classList.add("answer");

let pResult2 = document.createElement('p');
pResult2.classList.add("bold");

let pResult3 = document.createElement('p');
pResult3.classList.add("questions");

let pResult4 = document.createElement('p');
pResult4.classList.add("answer");

let pResult5 = document.createElement('p');
pResult5.classList.add("bold");

let pResult6 = document.createElement('p');
pResult6.classList.add("questions");

let buttonRate = document.createElement("button");

let congrat = document.createElement('p');
congrat.classList.add('congrat');

let passed = document.createElement('p');
passed.classList.add('passed');

let certificate = document.createElement('p');
certificate.classList.add('certificate');

function terzaPagina(){


//append
bodyTemp.append(newContainer);

newContainer.append(firstSection)
newContainer.append(secondSection)
newContainer.append(thirdSection)

firstSection.append(firstP)
firstSection.append(secondP)

secondSection.append(firstResult)
secondSection.append(secondResult)
secondSection.append(thirdResult)
firstResult.append(pResult1)
firstResult.append(pResult2)
firstResult.append(pResult3)
thirdResult.append(pResult4)
thirdResult.append(pResult5)
thirdResult.append(pResult6)

thirdSection.append(buttonRate)

secondResult.append(congrat);
secondResult.append(passed);
secondResult.append(certificate);

//codice
firstP.textContent = "Results";
secondP.textContent = "The summary of your answers:"


if(correctCount > wrongCount){
    congrat.textContent = 'Congratulations!';
    passed.innerHTML = '<a href="#">You passed the exam</a>';
    passed.id = 'popup-link';
    certificate.innerHTML = 'We\'ll send you the certificate in few minutes. <br> Check your email (including promotion / spam folder)';
}
else {
    congrat.textContent = 'Oh No';
    passed.innerHTML = '<a href="#">You failed the exam :(</a>';
    certificate.innerHTML = 'Get in touch with your teacher in order to retry the exam';
}

pResult1.textContent =  "Correct"
pResult2.textContent = `${Math.floor((correctCount / onlyCorrectAnswer.length) * 100)} %`
pResult3.textContent = `${correctCount}/${onlyCorrectAnswer.length} questions`
pResult4.textContent =   "Wrong";
pResult5.textContent = `${Math.ceil((wrongCount / onlyCorrectAnswer.length) * 100)} %`;
pResult6.textContent =  `${wrongCount}/${onlyCorrectAnswer.length} questions`

buttonRate.textContent = "RATE US";

//dare valore al grafico
secondResult.style.backgroundImage = `conic-gradient(#d20094 ${wrongCount * (360/onlyCorrectAnswer.length)}deg, #00ffff 0deg)`;



}
buttonRate.addEventListener('click', function(){
    destruction();
    pagina4();
});

passed.addEventListener('click', function (){
    destruction();
    creationPopup();})

function destruction() {
    newContainer.remove();
}

//popup
let listaOrdinata;
let tuttiLi;
let popupContainer;
function creationPopup(){
    console.log(questionsPopup);
    console.log(allAnswerPopup);
    console.log(allWrongAnswer);
    destruction();
    popupContainer = document.createElement("div");
    popupContainer.classList.add('popup')
    bodyTemp.append(popupContainer);
    let listaDomande = document.createElement("ul");
    popupContainer.append(listaDomande);
    questionsPopup.forEach(quizQuestion => {
        listaOrdinata = document.createElement("li");
        listaDomande.append(listaOrdinata);
        listaOrdinata.classList.add("questions-popup")
        listaOrdinata.textContent = " - " + quizQuestion;
        let p = document.createElement("p");
        listaOrdinata.append(p);
        })
    let allP = document.querySelectorAll(".questions-popup p");
    for (let i = 0; i < allAnswerPopup.length; i++) {
      allP[i].textContent = allAnswerPopup[i];
    }
    for (let i = 0; i < onlyCorrectAnswer.length; i++) {
        let p2 = allP[i];
        let rispostaCorretta = onlyCorrectAnswer[i];
        let testoDomanda = p2.textContent;
        let testoConRispostaGiusta = testoDomanda.replace(rispostaCorretta, "<span style='color:green'>" + rispostaCorretta + "</span>");
        p2.innerHTML = testoConRispostaGiusta;
      }
      
      let bottoneIndietro = document.createElement('button');
      popupContainer.append(bottoneIndietro);
      bottoneIndietro.id = 'back';
      bottoneIndietro.textContent = 'GO BACK';
      bottoneIndietro.addEventListener('click', function(){
        distruggiPopup();
        terzaPagina();
      });
      
    }
    function distruggiPopup() {
        popupContainer.remove();
    }