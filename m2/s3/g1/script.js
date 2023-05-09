let user_1 = null;
let user_2 = null;

let forms = document.querySelectorAll("form");

forms.forEach((value) => {
    value.addEventListener("submit", (el) => el.preventDefault());
});

class User {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    static compareAges(x, y) {
        return x.age > y.age
            ? `${x.firstName} è più vecchio di ${y.firstName}`
            : x.age == y.age
            ? `${x.firstName} e ${y.firstName} hanno la stessa età`
            : `${y.firstName} è più vecchio di ${x.firstName}`;
    }
}

class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    static compareOwner(x, y) {
        return x === y ? true : false;
    }
}

let form_users = document.getElementById("form-users");

form_users.addEventListener("submit", (el) => {
    const inputs = form_users.querySelectorAll("input");
  
});

let pets = [];
let pet_one_to_compare = null;
let pet_two_to_compare = null;
let form_pets = document.getElementById("form-pets");

form_pets.addEventListener("submit", () => {
    const inputs = form_pets.querySelectorAll("input");
    const pets_ul = document.getElementById("pets-list");
    const pets_ul_compare_one = document.getElementById(
        "pets-list-compare-one"
    );
    const pets_ul_compare_two = document.getElementById(
        "pets-list-compare-two"
    );
    let pet_info = document.getElementById("pet-info");

});