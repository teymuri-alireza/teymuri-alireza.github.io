# Alireza Teymuri

An interactive browser-based terminal built with JavaScript.

Check it out: https://teymuri-alireza.github.io/

## Available Commands

help · sudo · ls · whoami · pwd · cd · man · echo · date · clear · ...

## Roadmap

- Add a `projects` command
- Add the root user
- Create an `exit` command
- Implement command history with arrow-key navigation

<details>
<summary>Implemented</summary>

- Replace the default username `you` with `guest` and display it in the prompt
- Display the current working directory in the prompt
- Implement the `cd` command with a virtual file system
- Add additional commands (`echo`, `date`, ...)
- provide help for supported commands

</details>

## Known Issues

<!-- Nothing for now -->
- Gracfully handle "directory not defined" error and the `..` argument in the `ls` command
- Change coloring for each section such as error, path and input