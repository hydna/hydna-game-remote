# Hydna remote control for OpenEmu #
![Controller](/client/images/controller.png)
This application (a node app and html client) let's one or more people control a game in [OpenEmu](http://openemu.org) remotly.

* The node app is started on the system with the choosen [OpenEmu](http://openemu.org) game running, the app then connects to a [hydna](https://www.hydna.com) domain and waits for commands.

* The html client enables other users to send game control commands to the node app through a [hydna](http://www.hydna.com) domain.

* When the node app receives commands an applescript is called that presses the appropriate key.

**This demo has support for playing nes and snes games.**

## Requirements ##

* Your own [free hydna domain](http://www.hydna.com).
* [OpenEmu](http://openemu.org) installed (macosx only) and [node.js](http://nodejs.org) installed on the same system.
* Check the keymappings in **main.js** so they match you keyboard controller settings in OpenEmu.

## Setup ##

In **main.js** replace **HYDNA_DOMAIN** with your own hydna domain. In **client/index.html** do the same. Choose **nes** or **snes** controller scheme by adding nes or snes as a class on the body element in **client/index.html**.

## Installing ##

    npm install

## Running ##

    node main.js

* Start the OpenEmu game you would like to play.
* Then open the **client/index.html** file in your browser on any device (works great on mobile:))



