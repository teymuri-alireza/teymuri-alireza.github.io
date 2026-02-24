const output = document.getElementById("output");
const input = document.getElementById("cmd");
const version = document.getElementById("version");
version.textContent = "0.0.1";
let prompt = "> ";

document.addEventListener("click", () => {
    document.getElementById("cmd").focus();
});

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        const value = input.value.trim().toLowerCase();
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

    help(args) {
        if (!args[0]) {
            printLine("Available commands: help, sudo, ls, whoami, pwd, man, clear");
            printLine("You can also use `<command> -h` to see the help message.");
        }
        else {
            if (args[0] == "-h") {
                printLine("You didn't expect a help message for help! Did you?")
            }
        }
    },

    sudo(args) {
        if (!args[0]) {
            printLine("Usage: sudo <command>")
        }
        else {
            switch (args[0]) {
                case "-h":
                    printLine("Execute a command as another user.")
                    printLine("Usage: sudo <command>")
                    break;
                default:
                    printLine("Permission denied: with little power comes little responsibility.");
                    break;
            }
        }
    },

    ls(args) {
        if (!args[0]) {
            printLine("index.html style.css app.js README.md");
        }
        else {
            switch (args[0]) {
                case "-h":
                    printLine("List directory contents.");
                    printLine("Usage: ls [options]")
                    printLine("Options:")
                    printLine("[-h][-l][-a]")
                    break;
                case "-l":
                    printLine("total 16")
                    printLine("-rw-rw-r-- 1 you you   685  Feb 22 22:52 index.html")
                    printLine("-rw-rw-r-- 1 you you   346  Feb 22 17:51 style.css")
                    printLine("-rw-rw-r-- 1 you you  2543  Feb 23 17:52 app.js")
                    printLine("-rw-rw-r-- 1 you you   394  Feb 23 17:40 README.md")
                    break;
                case "-a":
                    printLine(". .. index.html style.css app.js README.md .git");
                    break;
                default:
                    break;
            }
        }
    },

    pwd(args) {
        if (!args[0]) {
            printLine("/home/you")
        }
        else {
            switch (args[0]) {
                case "-h":
                    printLine("Print the name of the current working directory.")
                    printLine("Usage: pwd")
                    break;
                default:
                    break;
            }
        }
    },

    whoami(args) {
        if (!args[0]) {
            printLine("Hi. I'm Alireza Teymuri - a web developer based in Iran.");
            printLine("I enjoy building back-end systems, solving CTF challenges and")
            printLine("contributing to open-source projects on GitHub.")
        }
        else {
            switch (args[0]) {
                case "-h":
                    printLine("Print about me.")
                    printLine("Usage: whoami")
                    break;
                default:
                    break;
            }
        }
    },

    man(args) {
        if (!args[0]) {
            printLine("We don't have manual page here!")
            printLine("Usage: man <command>")
        }
        else {
            switch (args[0]) {
                case "-h":
                    printLine("We don't have manual page here!")
                    printLine("Usage: man <command>")
                    break;
                default:
                    printLine("No man pages. Figure it out like a real hacker :)");
                    break;
            }
        }
    },

    clear(args) {
        if (!args[0]) {
            output.innerHTML = "";
        }
        else {
            switch (args[0]) {
                case "-h":
                    printLine("Clear the terminal screen")
                    printLine("Usage: clear")
                    break;
                default:
                    break;
            }
        }
    },

};

function printLine(text) {
    const div = document.createElement("div");
    div.textContent = text;
    output.appendChild(div);
}