const loadOne = document.getElementById("load-one");
const loadTwo = document.getElementById("load-two");
const searchForm = document.getElementById("search-photos");
let photoArr = [];
let btnsArr = document.querySelectorAll("main .btn-group button");

const setupEventCard = function (el, id) {
    el.addEventListener("click", () => {
        location.assign(`./details.html?id=${id}`);
    });
};

const buildCards = function () {
    photoArr.forEach((el, index) => {
        let newImg = document.createElement("img");
        newImg.classList.add("card-img-top");
        newImg.src = el.src.small;
        setupEventCard(newImg, el.id);
        let imgArr = document.querySelectorAll("main .card .card-img-top");
        imgArr[index].parentElement.replaceChild(newImg, imgArr[index]);
        document.querySelectorAll("small.text-muted")[index].innerText = el.id;
        document.querySelectorAll(".card-title")[index].innerText = el.alt;
        setupEventCard(document.querySelectorAll(".card-title")[index], el.id);
    });
};

const getImages = function (param) {
    fetch(
        `https://api.pexels.com/v1/search?query=${param}&per_page=9&size=small&orientation=landscape`,
        {
            method: "GET",
            headers: {
                Authorization:
                    "6hlm8Af8LfWsMnm45DhhuybrEcJU7xBCTyQRZIeFFOqTIYrDNa3S48EO",
            },
        }
    )
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error("Somethins gone wrong");
            }
        })
        .then((data) => {
            console.log(data);
            photoArr = data.photos;
            buildCards();
        })
        .catch((err) => {
            console.log(err);
        });
};
