// template_zfd4owb
// service_e71pefq
// KzFQPUaxPtxVKzBI1

const scaleFactor = 1 / 20
function moveBackground(event) {
const shapes = document.querySelectorAll(".shape");
const x = event.clientX * scaleFactor
const y = event.clientY * scaleFactor

for ( let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1  : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
}
}

let contrastToggle = false;
function toggleContrast() {
contrastToggle = !contrastToggle;
if (contrastToggle) {
    document.body.classList += " dark-theme"
}
else {
    document.body.classList.remove("dark-theme");
}
}

function contact() {
event.preventDefault();
const loading = document.querySelector(".modal__overlay--loading")
const success = document.querySelector(".modal__overlay--success")
loading.classList += " modal__overlay--visible"
emailjs
    .sendForm(
        "service_e71pefq",
        "template_zfd4owb",
        event.target,
        "KzFQPUaxPtxVKzBI1"
    ).then (() => {
        loading.classList.remove("modal__overlay--visible")
        success.classList +=" modal__overlay--visible"
    }).catch(() => {
        "The eamil service is unavailble. Please contact me on ehsoe0802@gmail.com"
    })
}
let isModalOpen = false;
function toggleModal() {
if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
}
isModalOpen = true;
document.body.classList += " modal--open";
}