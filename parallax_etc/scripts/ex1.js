window.addEventListener('scroll',function) {
let scrollPosition = window.scrollY;
let moveDistance = scrollPosition * 2;
document.querySelector('.f1').style.transform = "translateX(" + moveDistance + "px)";
}

const scrollMove = document.querySelector('.p2');