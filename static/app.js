const output = document.getElementById("output");
const input = document.getElementById("cmd");
let prompt = "> ";

document.addEventListener("click", () => {
    document.getElementById("cmd").focus();
});

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        const value = input.value.trim();
        printLine(prompt + value);

        handleCommand(value);
        input.value = "";
    }
});

function handleCommand(text)
{
    const [command, ...args] = text.split(" ");

    if (commands[command]) {
        commands[command](args);
    }
    else {
        if (text.split(" ") != "") {
            printLine(text + ": command not found");
        }
    }
}

const commands = {

    help() {
        printLine("Available commands: help, sudo, ls, whoami, pwd, man, clear");
    },

    sudo(args) {
        if (!args[0]) {
            printLine("Usage: sudo <command>")
        }
        else {
            printLine("Permission denied: with little power comes little responsibility.");
        }
    },

    ls() {
        printLine(". .. index.html style.css app.js .git");
    },

    pwd() {
        printLine("/home/you")
    },

    whoami() {
        printLine("Hi. I'm Alireza Teymuri - a web developer based in Iran.");
        printLine("I enjoy building back-end systems, solving CTF challenges and")
        printLine("contributing to open-source projects on GitHub.")
    },

    man() {
        printLine("No man pages. Figure it out like a real hacker :)");
    },

    clear() {
        output.innerHTML = "";
    },

};

function printLine(text) {
    const div = document.createElement("div");
    div.textContent = text;
    output.appendChild(div);
}