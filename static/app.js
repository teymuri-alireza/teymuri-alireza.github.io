const output = document.getElementById("output");
const input = document.getElementById("cmd");
const version = document.getElementById("version");
version.textContent = "0.2.0";
let prompt = "> ";
let path = "/home/you";

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
            printLine("Available commands: help, sudo, ls, whoami, pwd, cd, man, echo, date, clear");
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
        // the -h option is used only once, and will be ignored from other conditions
        if (args[0] == "-h") {
            printLine("List directory contents.");
            printLine("This command shows other directories contents only if used with `cd`");
            printLine("Usage: ls [options]")
            printLine("Options:")
            printLine("[-h][-l][-a]")
            return;
        }

        if (path == "/home/you") {
            if (!args[0]) {
                printLine("index.html style.css app.js README.md");
            }
            else {
                switch (args[0]) {
                    case "-l":
                        printLine("total 16")
                        printLine("-rw-rw-r-- 1 you you   685  Feb 22 22:52 index.html")
                        printLine("-rw-rw-r-- 1 you you   346  Feb 22 17:51 style.css")
                        printLine("-rw-rw-r-- 1 you you   253  Feb 23 17:52 app.js")
                        printLine("-rw-rw-r-- 1 you you   394  Feb 23 17:40 README.md")
                        break;
                    case "-a":
                        printLine(". .. index.html style.css app.js README.md .git");
                        break;
                    default:
                        break;
                }
            }
        }
        else if (path == "/home") {
            if (!args[0]) {
                printLine("you");
            }
            else {
                switch (args[0]) {
                    case "-l":
                        printLine("total 4");
                        printLine("drwxr-x--- 72 you you  4096 Feb 24 16:33 you");
                        break;
                    case "-a":
                        printLine(". .. you");
                        break;
                    default:
                        break;
                }
            }
        }
        else if (path == "/") {
            if (!args[0]) {
                printLine("bin boot dev home lib media opt root sbin snap swap.img");
                printLine("tmp var cdrom etc lib64 lost+found mnt proc run srv sys usr");
            }
            else {
                switch (args[0]) {
                    case "-l":
                        printLine("total 5622174");
                        printLine("lrwxrwxrwx   1 root root       6527 Apr 22 -2024 bin -> usr/bin");
                        printLine("drwxr-xr-x   4 root root       4096 Feb 22 11:18 boot");
                        printLine("dr-xr-xr-x   2 root root       4096 Aug 15 -2025 cdrom");
                        printLine("drwxr-xr-x   1 root root       5740 Feb 24 09:06 dev");
                        printLine("drwxr-xr-x   1 root root       1228 Feb 22 11:18 etc");
                        printLine("drwxr-xr-x   6 root root       4096 Sep 17 09:59 home");
                        printLine("lrwxrwxrwx   1 root root       6527 Apr 22 -2024 lib -> usr/lib");
                        printLine("lrwxrwxrwx   1 root root       8539 Apr 22 -2024 lib64 -> usr/lib64");
                        printLine("drwx------   2 root root       1384 Nov 13 20:46 lost+found");
                        printLine("drwxr-xr-x   3 root root       4096 Nov 13 23:07 media");
                        printLine("drwxr-xr-x   3 root root       4096 Nov 13 23:11 mnt");
                        printLine("drwxr-xr-x   1 root root       4096 Jan 13 20:16 opt");
                        printLine("dr-xr-xr-x   6 root root       2330 Feb 24 09:05 proc");
                        printLine("drwx------   8 root root       4096 Feb 12 00:19 root");
                        printLine("drwxr-xr-x   3 root root       1120 Feb 24 15:41 run");
                        printLine("lrwxrwxrwx   1 root root       5558 Apr 22 -2024 sbin -> usr/sbin");
                        printLine("drwxr-xr-x   4 root root       4096 Dec 16 20:00 snap");
                        printLine("drwxr-xr-x   2 root root       4096 Aug 15 -2025 srv");
                        printLine("-rw-------   1 root root       7296 Nov 13 21:52 swap.img");
                        printLine("dr-xr-xr-x   3 root root       5560 Feb 24 09:05 sys");
                        printLine("drwxrwxrwt   8 root root       4952 Feb 24 23:47 tmp");
                        printLine("drwxr-xr-x   6 root root       4096 Jan 15 15:07 usr");
                        printLine("drwxr-xr-x   6 root root       4096 Jan 16 09:29 var");
                        break;
                        case "-a":
                        printLine(". .. bin boot dev home lib media opt root sbin snap swap.img");
                        printLine("tmp var cdrom etc lib64 lost+found mnt proc run srv sys usr");
                        break;
                    default:
                        break;
                }
            }
        }
    },

    pwd(args) {
        if (!args[0]) {
            printLine(path)
        }
        else {
            switch (args[0]) {
                case "-h":
                    printLine("Prints the name of the current working directory.")
                    printLine("Usage: pwd")
                    break;
                default:
                    break;
            }
        }
    },

    cd(args) {
        if (!args[0]) {
            // the ~ path
            path = "/home/you"
        }
        else {
            switch (args[0]) {
                case "-h":
                    printLine("Changes the working directory");
                    printLine("Usage: cd <new path>");
                    break;
                    case "..":
                    // changes the current working directory to its parent directory
                    if (path == "/home/you") {
                        path = "/home";
                    }
                    else if (path == "/home") {
                        path = "/";
                    }
                    break;
                default:
                    path = args[0];
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

    echo(args) {
        // Use a different condition so text with leading spaces is still printed
        if (args.length === 0) {
            printLine("\u00A0");
        }
        else {
            if (args[0] == "-h") {
                printLine("Display a line of text");
                printLine("Usage: echo <text>");
            }
            else {
                var text = ""
                for (let i = 0; i < args.length; i++) {
                    text += args[i] + " ";
                }
                printLine(text.trim());
            }
        }
    },

    date(args) {
        if (!args[0]) {
            var JS_date = new Date().toString();
            var part_1 = JS_date.slice(0,25);
            var part_2 = JS_date.slice(28,33);
            printLine(part_1 + part_2)
        }
        else {
            switch (args[0]) {
                case "-h":
                    printLine("Print the date and time.");
                    printLine("Usage: date");
                    break;
                default:
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