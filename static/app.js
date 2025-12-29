let content = document.getElementById("desc-content");

function showIntro() {
    content.style.transition = "opacity 0.3s ease";
    content.style.opacity = "0";
    setTimeout(() => {
        introText = `<p>Hello, I'm Alireza Teymuri - a web developer based in Iran.
                    I enjoy building back-end systems, solving CTF challenges
                    and contributing to open-source projects on GitHub. When I'm not coding,
                    you'll probably find me playing chess.</p>
                    <p>Coffee is my daily debugger, and Linux is my engine.</p>`;
        content.innerHTML = introText;
        content.style.opacity = "1";
    }, 150);
}

function showProjects() {
    content.style.transition = "opacity 0.3s ease";
    content.style.opacity = "0";
    setTimeout(() => {
        projectsText = `The projects show be written here`;
        content.innerHTML = projectsText;
        content.style.opacity = "1";
    }, 150);
}

document.addEventListener("DOMContentLoaded", showIntro());