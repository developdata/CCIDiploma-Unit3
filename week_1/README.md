# Week 1 - Introduction to JavaScript
This folder contains information and code for the front-end JavaScript for week 2.

## Week 1 materials
Week 1 [slides](https://developdata.github.io/unit3_slides/week_02/#0)

Getting started [with JavaScript]( https://glitch.com/edit/#!/start-javascript)

Setting up [Node.js]( https://glitch.com/edit/#!/start-nodeapp)

Introduction to [Websockets]( https://glitch.com/edit/#!/start-sockets)

## References
[Addicted Toasters](http://www.haque.co.uk/addictedtoasters.php)
[Internet of Needy Things](http://nyethompson.net/works/internet-of-needy-things.html)
[Wall Climbing Robot](https://www.youtube.com/watch?v=K0D942Kqh9A&feature=emb_logo)
[The Good Night Lamp](http://goodnightlamp.com/)
[Arduino Day Dubai 2020](https://www.youtube.com/watch?v=UeixeZ5fL1M)
[IoT London](https://www.meetup.com/iotlondon/)


## Installing the Arduino IDE
An IDE is an integrated development environment, it has extra features to help you code. There is an IDE for Arduino that is easy to install, you can use an online version, but I have found it easier to have it downloaded locally on my computer. To download the Arduino IDE:

1. Go to the download page on the [Arduino IDE](https://www.arduino.cc/en/Main/Software)
2. Go down the page until you see Download the Arduino IDE and choose the right version for you from the list on the right hand side - I chose Windows Installer for my PC
3. This will open a new page which will let you contribute and download or just download
4. Once the file is downloaded double click on it to install

## Command line interface
Both Windows and Mac have built in command line interfaces, though you can install a different one if you prefer. On a Mac it's called Terminal, and on a PC it's called command prompt.

On a Mac the terminal is located in the Utilities folder, the path is:
Hard Drive/Applications/Utilities/Terminal

On a PC the command prompt can be opened by typing the name into the search bar.

## Installing Node.js

### Installation on a PC
You can download Node.js from the [download page on the site](https://nodejs.org/en/) choose the LTS version as that is the stable release of Node.js.
1. Once on the page click on the LTS button to download the installation package.
2. When downloaded double click on the file, this should open the installation wizard
3. Run the installation wizard, accept the defaults and allow it to make changes to your computer
4. Restart your computer

To check if it has installed open a command prompt window and type in `node -v` the version number should be printed below. It should also have installed node package manager(npm), you can check this by typing `npm -v` at the command prompt

### Installation on a Mac
It can be installed on a Mac in a similar way, but its better to install it with node version manager(NVM). This is more complicated, but it gives you the freedom to install different versions of Node and easily mangage them.

Another reason its better to install in through the version manager is because if you just download and install it from the site you will need admin rights to install further packages. You can do this using the sudo command, but this isn't considered best practice as using it grants temporary admin rights, which can cause unwanted changes.

The following instructions are how to install it using node version manager, it does take a bit of time to download everything you will need but it is worth it.

You will need to have Xcode installed on your mac, if you do you should be able to see it in your applications folder. If you don't have it installed you can install it from the app store. This can take a few hours.

You will also need a .bashprofile on your machine, you can check if you have one using terminal and if you don't you can create one. To Check if you have a .bashprofile:
1. Open a terminal window, make sure you are at the root, you should be able to see your computer name login followed by $
2. At the $ prompt type in `-a TextEdit.app .bash_profile`
3. If you have a .bashprofile the file will open in a new window, you can close the window
4. If file doesn't open, you will need to create one, you can do this by typing `touch .bash_profile` at the prompt.

To install NVM, in a terminal window, at the root type `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.36.0/install.sh | bash'` You can find more information about instalation on the [github page](https://github.com/nvm-sh/nvm). You can check its installed by typing `nvm -v' in a terminal window and you should get information about the version you have installed.

Once NVM is installed you can use it to install Node.js. Open a terminal window, and at the root prompt type `nvm install node`. Check if its installed by typing `node -v` in the command prompt.







