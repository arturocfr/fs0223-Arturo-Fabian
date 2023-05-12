const endpoint = "https://striveschool-api.herokuapp.com/api/product/";
const authKey =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZTI5Yjg4Zjc0MDAwMTQyODc0MzAiLCJpYXQiOjE2ODM4NzQ0NTksImV4cCI6MTY4NTA4NDA1OX0.ACkQXf6zVDzxCKSNDJczEXq6v5Muf3pxqueHx4Dajl0";
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
        <div class="col-12 d-flex flex-column flex-sm-row align-items-center justify-content-sm-between border-bottom border-2 border-black">
                <div class="d-flex align-items-center">
                    <img src="${el.imageUrl}" class="rounded-2">
                    <div class="d-flex flex-column ms-3">
                        <h6 class="mb-1">${el.name}</h6>
                        <p class="mb-2">Brand: ${el.brand}</p>
                        <p>Price: ${el.price}$</p>
                    </div>
                </div>
                <div class="d-flex flex-column justify-content-center align-items-center mt-3 mt-sm-0">
                <a class="w-100" href="./details.html?id=${el._id}"><button class="btn btn-outline-warning py-1 mb-3 w-100">View Product Details</button></a>
                    <a class="w-100" href="./admin.html?id=${el._id}"><button class="btn btn-outline-warning py-1 w-100">Edit Product</button></a>
                </div>
            </div>
        `;
    });
};
