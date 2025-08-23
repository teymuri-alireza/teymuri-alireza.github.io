window.onload = function() {
    setTimeout(function() {
        document.getElementById("greeting").style.opacity = 1;
        document.getElementById("greeting").style.transition = "opacity 1s";
    }, 200);
};

const roles = [
    "Computer Engineering Student",
    "Developer",
    "Problem Solver",
    "Lifelong Learner"
];

let i = 0;
const roleElement = document.querySelector("#role");

roleElement.textContent = roles[i]; 

setInterval(() => {
  roleElement.style.opacity = 0; 
  
  setTimeout(() => {
    i = (i + 1) % roles.length;
    roleElement.textContent = roles[i];
    roleElement.style.opacity = 1; 
  }, 600);
}, 2250);


const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let currentIndex = 0;

function updateSlidePosition() {
  const offset = -currentIndex * 100;
  document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlidePosition();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlidePosition();
});

function projectPage() {
  const home = document.getElementById("home-area");
  const project = document.getElementById("project-area");
  home.classList.remove("active");
  project.classList.add("active");
}

function homePage() {
  const home = document.getElementById("home-area");
  const project = document.getElementById("project-area");
  project.classList.remove("active");
  home.classList.add("active");
}
