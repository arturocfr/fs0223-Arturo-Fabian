const endpoint = "https://striveschool-api.herokuapp.com/api/product/";
const authKey =
"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgxN2M1ZWU3ODE4NzAwMTVjMjY3YTgiLCJpYXQiOjE2ODQxMDc2OTcsImV4cCI6MTY4NTMxNzI5N30.a-nOJ4hagoQ6XzoEyuPOt1UXsjTcUdXVnM874V6HR04";
const form = document.getElementById("myForm");
let addressContent = new URLSearchParams(window.location.search);
let id = addressContent.get("id");

class Product {
    constructor(name, description, brand, imageUrl, price) {
        this.name = name;
        this.description = description;
        this.brand = brand;
        this.imageUrl = imageUrl;
        this.price = price;
    }
}

const goToHome = function () {
    location.assign("./index.html");
};

const showSuccessModal = function () {
    let modal = document.querySelector(".modal .modal-dialog");
    modal.innerHTML = `
        <div class="modal-content bg-dark text-light">
            <div class="modal-header">
                <h5 class="modal-title text-warning">Success!</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <p>Product saved correctly!</p>
                <p>Click the button to go back to the Homepage and see if is displaying correctly!</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-warning" onclick="goToHome()">Homepage</button>
            </div>
        </div>
    `;
    document.getElementById("err-trigger").click();
};

const resetFields = function () {
    let inputsArr = form.querySelectorAll("input");
    inputsArr.forEach((element) => {
        element.value = "";
    });
};

const deleteProduct = function (id) {
    fetch(endpoint + id, {
        method: "DELETE",
        headers: {
            Authorization: authKey,
            "Content-Type": "application/json",
        },
    })
        .then((res) => {
            if (res.ok) {
                location.assign("./index.html");
            } else {
                throw new Error("Something gone wrong..");
            }
        })
        .catch((err) => console.log(err));
};

const showErrorAlert = function (code) {
    const alert = document.getElementById("alert-msg");
    const appendAlert = function () {
        const wrapper = document.createElement("div");
        wrapper.innerHTML = [
            `<div class="alert alert-danger alert-dismissible" role="alert">`,
            code == 404
                ? `<div>Error 404 -- Page not found. Check the API endpoint</div>`
                : code == 401
                ? `<div>Error 401 -- Authorization error. Check your API Key.</div>`
                : code == 400
                ? `<div>Errore 400 -- Bad request, please check if all the fields are filled correctly.</div>`
                : code == 500
                ? `<div>Error 500 -- The server is not responding, please try again later.</div>`
                : `<div>Error ${code} -- What to do now?</div>`,
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            "</div>",
        ].join("");
        alert.append(wrapper);
    };
    appendAlert();
};

const postNewProduct = function (product, id = null) {
    fetch(id ? endpoint + id : endpoint, {
        method: id ? "PUT" : "POST",
        headers: {
            Authorization: authKey,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
    })
        .then((res) => {
            if (res.ok) {
                showSuccessModal();
            } else {
                throw new Error(res.status);
            }
        })
        .catch((err) => showErrorAlert(err.message));
};

const setupForm = function () {
    let inputsArr = form.querySelectorAll("input");

    if (id) {
        let btn = form.querySelector("button");
        btn.innerText = "Edit Product";
        fetch(endpoint + id, {
            headers: {
                Authorization: authKey,
            },
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error("Something gone wrong..");
                }
            })
            .then((data) => {
                inputsArr[0].value = data.name;
                inputsArr[1].value = data.description;
                inputsArr[2].value = data.brand;
                inputsArr[3].value = data.imageUrl;
                inputsArr[4].value = data.price;
            })
            .catch((err) => console.log(err));
    }
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let prod = new Product(
            inputsArr[0].value,
            inputsArr[1].value,
            inputsArr[2].value,
            inputsArr[3].value,
            inputsArr[4].value
        );

        id ? postNewProduct(prod, id) : postNewProduct(prod);
    });
};

const setupDelBtn = function () {
    let btn = document.getElementById("del-btn");
    if (id) {
        btn.addEventListener("click", function () {
            let modal = document.querySelector(".modal .modal-dialog");
            modal.innerHTML = `
            <div class="modal-content bg-dark text-light">
                <div class="modal-header">
                    <h5 class="modal-title text-danger">Warning</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <p>Are you sure you want to delete this product?</p>
                    <p>This operation cannot be undone!</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
                    <button type="button" onclick="deleteProduct('${id}');" data-bs-dismiss="modal" class="btn btn-danger">Yes, delete</button>
                </div>
            </div>
        `;
        });
    } else {
        btn.classList.add("d-none");
    }
};

const setupResetBtn = function () {
    let btn = document.getElementById("reset-btn");
    btn.addEventListener("click", () => {
        let modal = document.querySelector(".modal .modal-dialog");
        modal.innerHTML = `
        <div class="modal-content bg-dark text-light">
            <div class="modal-header">
                <h5 class="modal-title">Warning</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <p>Are you sure you want to reset all the fields?</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
                <button type="button" onclick="resetFields()" data-bs-dismiss="modal" class="btn btn-warning">Yes, reset</button>
            </div>
        </div>
        `;
    });
};

window.onload = function () {
    setupForm();
    setupDelBtn();
    setupResetBtn();
};