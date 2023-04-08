// BUTTONS //
const previousBtn = document.querySelector("#previousBtn");
const nextBtn = document.querySelector("#nextBtn");
// TABS //
const sizeAndCrustTab = document.querySelector("#size-and-crust-tab");
const cheeseAndSauceTab = document.querySelector("#cheese-and-sauce-tab");
const toppingsTab = document.querySelector("#toppings-tab");

// EVENT LISTENERS //
previousBtn.addEventListener("click", e => {
    e.preventDefault();
    if (cheeseAndSauceTab.classList.contains("active")) {
        sizeAndCrustTab.click();
    } else if (toppingsTab.classList.contains("active")) {
        cheeseAndSauceTab.click();
    }
});

nextBtn.addEventListener("click", e => {
    e.preventDefault();
    if (sizeAndCrustTab.classList.contains("active")) {
        cheeseAndSauceTab.click();
    } else if (cheeseAndSauceTab.classList.contains("active")) {
        toppingsTab.click();
    }
});

sizeAndCrustTab.addEventListener("click", e => {
    e.preventDefault();
    previousBtn.classList.remove("d-flex");
    previousBtn.classList.add("d-none");
    nextBtn.classList.remove("d-none");
    nextBtn.classList.add("rounded");
    nextBtn.classList.add("d-flex");
});

cheeseAndSauceTab.addEventListener("click", e => {
    e.preventDefault();
    previousBtn.classList.remove("d-none");
    previousBtn.classList.remove("rounded");
    previousBtn.classList.add("d-flex");
    nextBtn.classList.remove("d-none");
    nextBtn.classList.remove("rounded");
    nextBtn.classList.add("d-flex");
});

toppingsTab.addEventListener("click", e => {
    e.preventDefault();
    nextBtn.classList.add("d-none");
    previousBtn.classList.remove("d-none");
    previousBtn.classList.add("rounded");
    previousBtn.classList.add("d-flex");
});

// if (sizeAndCrustTab.classList.contains("active")) {
//     previousBtn.classList.remove("d-flex");
//     previousBtn.classList.add("d-none");
// } else if (cheeseAndSauceTab.classList.contains("active")) {
//     previousBtn.classList.remove("d-none");
//     previousBtn.classList.add("d-flex");
// } else if (toppingsTab.classList.contains("active")) {
//     nextBtn.classList.add("d-none");
// }