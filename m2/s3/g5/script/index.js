const endpoint = "https://striveschool-api.herokuapp.com/api/product/";
const authKey =
"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgxN2M1ZWU3ODE4NzAwMTVjMjY3YTgiLCJpYXQiOjE2ODQxMDc2OTcsImV4cCI6MTY4NTMxNzI5N30.a-nOJ4hagoQ6XzoEyuPOt1UXsjTcUdXVnM874V6HR04";
let productsArr = [];

const goToEditPage = function (id) {
    location.assign(`./admin.html?id=${id}`);
};

const goToDetailsPage = function (id) {
    location.assign("./details.html?id=" + id);
};

const buildCols = function () {
    let row = document.getElementById("prod-row");
    row.innerHTML = "";
    productsArr.forEach((el) => {
        row.innerHTML += `
        <div class="col-12 d-flex flex-column flex-md-row align-items-center justify-content-md-between pb-4 pb-md-3 border-bottom border-2 border-black">
                <div class="d-flex align-items-center mb-3 mb-md-0">
                    <img src="${el.imageUrl}" class="rounded-2">
                    <div class="d-flex flex-column ms-3">
                        <h6 class="mb-1">${el.name}</h6>
                        <p class="mb-2">Brand: ${el.brand}</p>
                        <p>Price: ${el.price}$</p>
                    </div>
                </div>
                <div class="d-flex flex-column justify-content-center align-items-center mt-3 mt-sm-0">
                <a class="w-100" href="./details.html?id=${el._id}"><button class="btn btn-outline-primary py-1 mb-3 w-100">View Product Details</button></a>
                    <a class="w-100" href="./admin.html?id=${el._id}"><button class="btn btn-outline-primary py-1 w-100">Edit Product</button></a>
                </div>
            </div>
        `;
    });
    document.querySelector(".spinner-border").classList.add("d-none");
};

const showErrorAlert = function (code) {
    const alert = document.getElementById("alert-msg");
    const appendAlert = function () {
        const wrapper = document.createElement("div");
        wrapper.innerHTML = [
            `<div class="alert alert-danger alert-dismissible" role="alert">`,
            code == 404
                ? `<div>Error 404 -- Page not found. Something gone wrong while loading resources.</div>`
                : code == 401
                ? `<div>Error 401 -- Authorization error. Please contact the admin.</div>`
                : code == 400
                ? `<div>Errore 400 -- Bad request, please contact the admin.</div>`
                : code == 500
                ? `<div>Error 500 -- The server is not responding, please try again later.</div>`
                : `<div>Error ${code} -- Please contact the admin if this persist!</div>`,
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            "</div>",
        ].join("");
        alert.append(wrapper);
    };
    appendAlert();
};

const getAllProducts = function () {
    fetch(endpoint, {
        headers: {
            Authorization: authKey,
        },
    })
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error(res.status);
            }
        })
        .then((data) => {
            productsArr = data;
            document.getElementById("prod-counter").innerText =
                productsArr.length;
            buildCols();
        })
        .catch((err) => showErrorAlert(err.message));
};

const setupInfoBtn = function () {
    let btn = document.getElementById("info-btn");
    let modal = document.querySelector("#myModal .modal-dialog");
}

window.onload = function () {
    getAllProducts();
    setupInfoBtn();
};