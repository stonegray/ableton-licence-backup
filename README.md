# ableton-licence-backup

**Backup your current Ableton licences as an .auz offline activation file**

![](https://img.shields.io/npm/dt/@stonegray/ableton-licence-backup) ![](https://img.shields.io/github/languages/code-size/stonegray/ableton-licence-backup) ![](https://img.shields.io/github/license/stonegray/ableton-licence-backup)

`ableton-licence-backup` reads the Ableton licences you currently have activated on your machine, and exports them to an `.auz` file, which can be used for offline activation.

This works for all full licences, even if they were activated using the website and you never had an `.auz` licence file. Trial licences are unsupported.

Looking for a GUI version packaged as a `.app`? I'm happy to write this for people that aren't comfortable using the terminal if there's demand! Drop a message using the issue tracker above.

## Installation & Usage

Run `npm i -g ableton-licence-backup` to install the utility.

Type `ableton-licence-backup latest` to export the licence files for the latest version into your current directory.

## Requirements:

  - Ableton 10x+
  - macOS 
  - Node 15+
