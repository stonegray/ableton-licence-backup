# ableton-licence-backup

**Backup your current Ableton licences as an .auz offline activation file**

![](https://img.shields.io/npm/dt/@stonegray/ableton-licence-backup) ![](https://img.shields.io/github/languages/code-size/stonegray/ableton-licence-backup) ![](https://img.shields.io/github/license/stonegray/ableton-licence-backup)

`ableton-licence-backup` extracts the Ableton licences you currently have activated on your machine, and exports them to an Ableton offline authorization (`.auz`) file, which can be used to activate all of the same products and addons in the future, without using the ableton website.

This works only for full licences of Ableton 10.x. It will work even if they were activated using the website and you never actually had an `.auz` licence file. Trial licences are unsupported right now, but it's possible they can be added if we learn a little more about the format of the file. (See below for how to help!)

Looking for a GUI version packaged as a `.app`? I'm happy to write this for people that aren't familliar with using terminal if there's demand! Drop a message using the issue tracker above.

## Installation & Usage

Run `npm i -g ableton-licence-backup` to install the utility.

Type `ableton-licence-backup` to export the licence files for the latest version into your current directory. By default, saves as `Authorize.auz`.

## Requirements:

  - Ableton 10x+
  - macOS 
  - Node 15+

