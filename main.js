var applescript = require("applescript");
var hydna = require("hydna");
var util = require("util");

// Very basic AppleScript command. Returns the song name of each
// currently selected track in iTunes as an 'Array' of 'String's.

var HYDNA_DOMAIN = "hydna-demo-remote.hydna.net";
var PASSWD = "hi";

// snes controller
var ALLOWED_COMMANDS = [
    {key: "a", code:"2"}, // 2 = d 
    {key: "b", code:"1"}, // 1 = s 
    {key: "x", code:"13"}, // 13 = w
    {key: "y", code:"0"}, // 0 = a 
    {key: "start", code:"46"}, // enter 
    {key: "select", code:"76"},
    {key: "up", code:"126"},
    {key: "down", code:"125"},
    {key: "left", code:"123"}, 
    {key: "right", code:"124"},
    {key: "topleft", code:"123"},
    {key: "topright", code:"124"}
];

//var SCRIPT = 'tell application "System Events" to keystroke "%s" using command down';
//var SCRIPT = 'tell application "System Events" to key code %s using command down';
var SCRIPT = 'activate application "TextMate"\ntell application "System Events" to key code %s';
//var SCRIPT = 'tell application "System Events" to key code %s';


function connect(){
    var channel = hydna.createChannel(HYDNA_DOMAIN, 'r');
    channel.on('data', function(data){
        console.log("received:"+data);
        runScript(data);
    });
    
    channel.on('connect', function(e) {
        // read/write connection is ready to use 
        console.log("connected to hydna");
    });

    channel.on('error', function(e) {
        console.log(e);
    // an error occured when connecting
        console.log("error connecting");
        // re connect logic
    });
}

function runScript(command){
    for(var i in ALLOWED_COMMANDS){
        if(ALLOWED_COMMANDS[i].key === command){
            var key = util.format(SCRIPT, ALLOWED_COMMANDS[i].code);
            console.log(key);
            /*
            applescript.execString(key, function(err, rhs){
                if(err){
                    console.log(err);
                }
            });*/ 
            break;
        }
    }
}

connect();
