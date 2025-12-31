let intro = document.getElementById("content-intro");
let projects = document.getElementById("content-projects");
projects.style.transition = "opacity 0.3s ease";
intro.style.transition = "opacity 0.3s ease";

let introBtn = document.getElementById("introBtn");
let projectsBtn = document.getElementById("projectsBtn");

function showIntro() {
    projects.style.opacity = "0";
    projects.style.display = "none";
    intro.style.display = "block";
    projectsBtn.style.background = "none";
    introBtn.style.backgroundColor = "hsl(216, 16%, 6%)";
    setTimeout(() => {
        intro.style.opacity = "1";
    }, 150);
}

function showProjects() {
    intro.style.opacity = "0";
    intro.style.display = "none";
    projects.style.display = "block";
    introBtn.style.background = "none";
    projectsBtn.style.backgroundColor = "hsl(216, 16%, 6%)";
    setTimeout(() => {
        projects.style.opacity = "1";
    }, 150);
}

document.addEventListener("DOMContentLoaded", showIntro());