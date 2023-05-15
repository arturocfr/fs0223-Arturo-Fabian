const endpoint = "https://striveschool-api.herokuapp.com/api/product/";
const authKey =
"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgxN2M1ZWU3ODE4NzAwMTVjMjY3YTgiLCJpYXQiOjE2ODQxMDc2OTcsImV4cCI6MTY4NTMxNzI5N30.a-nOJ4hagoQ6XzoEyuPOt1UXsjTcUdXVnM874V6HR04";
let prodArr = [];

const goToDetails = function (id) {
    location.assign(`./details.html?id=${id}`);
};

const buildPage = function (prod = null) {
    let row = document.getElementById("myRow");
    if (prod) {
        row.innerHTML += `<div
        class="col-12 mt-3 d-flex flex-column flex-lg-row border-bottom border-2 border-black justify-content-between align-items-center">
        <div class="d-flex flex-column align-items-center align-items-lg-start">
            <img class="mb-2 rounded-2" src="${prod.imageUrl}">
            <h4>${prod.name}</h4>
            <p>${prod.price}$</p>
        </div>
        <div class="d-flex flex-column">
            <button class="btn btn-outline-warning px-3 mb-3" onclick="goToDetails('${prod._id}')">View Product Details</button>
            <button class="btn btn-outline-warning px-3 mb-3 mb-lg-0" onclick="deleteItems('${prod._id}')">Remove from Cart</button>
        </div>
    </div>`;
    } else {
        row.innerHTML = `
            <div class="col-12 mt-4 d-flex justify-content-center">No Items in your cart..</div>
            <div class="col-12 mt-4 d-flex justify-content-center"><a href="./index.html"><button class="btn btn-outline-warning">Back to Homepage</button></a></div>
        `;
    }
    document.querySelector(".spinner-border").classList.add("d-none");
};

const fetchProducts = function (id) {
    fetch(endpoint + id, {
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
            buildPage(data);
        })
        .catch((err) => showErrorAlert(err.message));
};

const getStorage = async function () {
    if (localStorage.getItem("your_cart")) {
        let row = document.getElementById("myRow");
        row.innerHTML = "";
        prodArr = JSON.parse(localStorage.getItem("your_cart"));
        document.getElementById("prod-count").innerText = prodArr.length;
        prodArr.forEach((element) => {
            fetchProducts(element.id);
        });
        let total = document.getElementById("cart-total");
        total.innerText =
            prodArr.reduce((prev, curr) => {
                return prev + curr.price;
            }, 0) + "$";
    } else {
        buildPage();
    }
};

const deleteItems = function (id) {
    document.querySelector(".spinner-border").classList.remove("d-none");
    let jsoned = JSON.parse(localStorage.getItem("your_cart"));
    let index = jsoned.findIndex((el) => el.id == id);
    jsoned.splice(index, 1);
    if (jsoned.length < 1) {
        localStorage.removeItem("your_cart");
        document.querySelector(".spinner-border").classList.add("d-none");
        buildPage();
        document.getElementById("cart-total").innerText = "0$";
    } else {
        localStorage.setItem("your_cart", JSON.stringify(jsoned));
        getStorage();
    }
};

const showErrorAlert = function (code) {
    const alert = document.getElementById("alert-msg");
    const appendAlert = function () {
        const wrapper = document.createElement("div");
        wrapper.innerHTML = [
            `<div class="alert alert-danger alert-dismissible" role="alert">`,
            code == 404
                ? `<div>Error 404 -- Product does not exists. It is possibile that it has been deleted by the admin.</div>`
                : code == 401
                ? `<div>Error 401 -- You are not authorized to access to this product infos.</div>`
                : code == 400
                ? `<div>Errore 400 -- Bad request, contact the admin if this persist.</div>`
                : code == 500
                ? `<div>Error 500 -- The server is not responding, please try again later.</div>`
                : `<div>Error ${code} -- Contact the admin if this persist.</div>`,
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            "</div>",
        ].join("");
        alert.append(wrapper);
    };
    appendAlert();
};

window.onload = function () {
    getStorage();
};