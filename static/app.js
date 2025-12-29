let intro = document.getElementById("content-intro");
let projects = document.getElementById("content-projects");
projects.style.transition = "opacity 0.3s ease";
intro.style.transition = "opacity 0.3s ease";

function showIntro() {
    projects.style.opacity = "0";
    setTimeout(() => {
        intro.style.opacity = "1";
    }, 150);
}

function showProjects() {
    intro.style.opacity = "0";
    setTimeout(() => {
        projects.style.opacity = "1";
    }, 150);
}

document.addEventListener("DOMContentLoaded", showIntro());