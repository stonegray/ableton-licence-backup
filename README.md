# ableton-licence-backup

**Backup your current Ableton licences as an .auz offline activation file**

![](https://img.shields.io/npm/dt/@stonegray/ableton-licence-backup) ![](https://img.shields.io/github/languages/code-size/stonegray/ableton-licence-backup) ![](https://img.shields.io/github/license/stonegray/ableton-licence-backup)

`ableton-licence-backup` extracts the Ableton licences you currently have activated on your machine, and exports them to an Ableton offline authorization (`.auz`) file, which can be used to activate all of the same products and addons in the future, without using the ableton website.

This works only for full licences of Ableton 10.x. It will work even if they were activated using the website and you never actually had an `.auz` licence file. Trial licences are unsupported right now, but it's possible they can be added if we learn a little more about the format of the file. (See below for how to help!)

Looking for a GUI version packaged as a `.app`? I'm happy to write this for people that aren't comfortable using the terminal if there's demand! Drop a message using the issue tracker above.

## Installation & Usage

Run `npm i -g ableton-licence-backup` to install the utility.

Type `ableton-licence-backup` to export the licence files for the latest version into your current directory.

## Requirements:

  - Ableton 10x+
  - macOS 
  - Node 15+

## Want to help?

I'm looking for users who are activating Abelton to use the offline activation and send me the `.auz` files, and their `Unlock.cfg` files. You can redact your serial number and responce code if you want, although these can't be used to activate or do anything nefarious with your licence. 

These will be used to help document parts of the file format we currently don't know, or only partially understand, such as DistrobutionType.

Specifically I'm looking for:
  - `.auz`/`.cfg` from a Trial or time limited installation
  - `.auz`/`.cfg` from Intro or Standard (I only need the first line of the .auz for these)
  - `.auz`/`.cfg` from Ableton 9.x
  - Any other weird licence files you might have kicking around

I already have enough data from Suite and Lite owners, thanks everybody for the help!
  
