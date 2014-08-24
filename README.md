### Hydna remote control for openemu ###

This application (a node app and html client) let's several people control a game in openemu remotly.

The node app is started on the system with the choosen openemu game running, the app then connects to a hydna domain and waits for commands.

The html client enables other users to send game control commands to the node app through a hydna domain.

When the node app receives commands a applescript is called that presses the appropriate key.

**This demo has support for playing nes and snes games.**

### Requirements ###

* Your own free hydna domain
* OpenEmu installed (macosx only) and node.js installed on the same system
* Check the keymappings in main.js and index.html

### Setup ###

In main.js replace HYDNA_DOMAIN with your own hydna domain. In client/index.html do the same.

### Installing ###

    npm install

### Running ###

    node main.js

* Start the OpenEmu game you would like to play
* Then open the **client/index.html** file in your browser, (work great on mobile)



