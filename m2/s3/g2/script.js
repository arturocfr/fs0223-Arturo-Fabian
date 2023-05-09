let nameInput = document.getElementById("nameInput");
let emailInput = document.getElementById("emailInput");
let passwordInput = document.getElementById("passwordInput");

let timeP = document.getElementById("time-p");
let minuteP = document.getElementById("minute-p");
timer_counter = 0;
minutes_counter = 0;

let saveBtn = document.getElementById("save-btn");
let delBtn = document.getElementById("delete-btn");

saveBtn.addEventListener("click", function () {
    let err = document.getElementById("error-p");
    if (
        nameInput.value &&
        emailInput.value.includes("@") &&
        passwordInput.value
    ) {
        localStorage.setItem("savedName", nameInput.value);
        localStorage.setItem("savedEmail", emailInput.value);
        localStorage.setItem("savedPassword", passwordInput.value);
        err.classList.add("opacity-0");
    } else {
        err.innerText = "Please fill all the fields correctly!";
        err.classList.remove("opacity-0");
    }
});

delBtn.addEventListener("click", function () {
    let err = document.getElementById("error-p");
    localStorage.removeItem("savedName");
    localStorage.removeItem("savedEmail");
    localStorage.removeItem("savedPassword");

    nameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";

    !err.classList.contains("opacity-0")
        ? err.classList.add("opacity-0")
        : null;
});

let timer = function () {
    setInterval(() => {
        if (timer_counter == 60) {
            timer_counter = 0;
            minutes_counter++;
            minutes_counter < 10
                ? (minuteP.innerText = `0${Number(minutes_counter)}`)
                : (minuteP.innerText = minutes_counter);
        }
        timer_counter < 10
            ? (timeP.innerText = `0${timer_counter}`)
            : (timeP.innerText = timer_counter);

        sessionStorage.setItem("seconds", timer_counter);
        timer_counter++;
        sessionStorage.setItem("minutes", minutes_counter);
    }, 1000);
};

window.onload = function () {
    let myForm = document.querySelector("form");
    myForm.addEventListener("submit", (e) => e.preventDefault());

    const name = localStorage.getItem("savedName");
    const email = localStorage.getItem("savedEmail");
    const pass = localStorage.getItem("savedPassword");

    name ? (nameInput.value = name) : (nameInput.value = "");
    email ? (emailInput.value = email) : (emailInput.value = "");
    pass ? (passwordInput.value = pass) : (passwordInput.value = "");

    const sec = sessionStorage.getItem("seconds");
    const min = sessionStorage.getItem("minutes");

    if (sec) {
        timer_counter = sec;
        timer_counter < 10
            ? (timeP.innerText = `0${timer_counter}`)
            : (timeP.innerText = timer_counter);
    }
    if (min) {
        minutes_counter = min;
        minutes_counter < 10
            ? (minuteP.innerText = `0${Number(minutes_counter)}`)
            : (minuteP.innerText = minutes_counter);
    }

    timer();
};