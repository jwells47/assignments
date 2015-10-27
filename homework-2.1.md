# Homework 2.1 - Ever wonder what all these signs say?

For Homework 1.1, you found a nice project on Github, forked it into your own account, and cloned it into your Cloud 9 IDE account. For this assignment, pick one or more Javascript files from your project (you DID pick a Javascript project, didn't you?) and identify some of the following items of Javascript grammar and vocabulary that we talked about in class, including but not limited to:

* Variables: `$name`
* Constants: `E_USER_WARNING`, `MY_AWESOME_CONSTANT`
* Arithmetic operators: addition (+), subtraction (-)
* Functions: `array_slice()`, `do_something_amazing()`

When you find one, identify the file and line number in this file, below the instrcutions per the example below. Try to make the indentation match the original file (yes, copy and paste), even if that means there's NO indentation. Crazy Javascript-ers.

You don't have to identify EVERYTHING in a given line or even in a single file, but you may get extra points if you're thorough or make a survey of more than one file... And you might get docked if you make too much work for me. I at least want to see about 50 lines of code.

When you're done editing this file, save it, commit it, and push it to your "assignments" repo, called "origin". You remember how to push, right?

## Your work should look like this...

`path/to/file.js:3`
```javascript
    if ( true )
    // Boolean: true
```

`path/to/file.js:42`
```javascript
    var name = do_something_amazing() + 1;
    // Variable: name
    // Function: do_something_amazing()
    // Integer: 1
```

## Now get to it!



// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.
//
var http = require('http');
    //variable: http
    //funtion: require
    //string: ('http')

var path = require('path');
   //variabe: path
   //function: require
   //string:('path")
   
var async = require('async');
   //variable: async
   //function: require
   //string:('async')
   
var socketio = require('socket.io');
   //variable: socketio
   //function: require
   //string: ('socket.io')
   
var express = require('express');
   //variable: express
   //funtion: require
   //string: ('express');
   
//
// ## SimpleServer `SimpleServer(obj)`
//
// Creates a new instance of SimpleServer with the following options:
//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
//
var router = express();
var server = http.createServer(router);
var io = socketio.listen(server);

router.use(express.static(path.resolve(__dirname, 'client')));
   //operator
   
var messages = []; this is an array
   //variable: message
   //
var sockets = []; this is an array
   variable: sockets

io.on('connection', function (socket) {
    messages.forEach(function (data) {
      socket.emit('message', data);
    });
   // function operator
   
    sockets.push(socket);
   //variable object operator
   
    socket.on('disconnect', function () {
      sockets.splice(sockets.indexOf(socket), 1);
      updateRoster();
    });

    socket.on('message', function (msg) {
      var text = String(msg || '');

      if (!text)
        return;
        //xls/if statement
        
      socket.get('name', function (err, name) {
        var data = {
          name: name,
          text: text
        };
        //funtion
        //operator

        broadcast('message', data);
        messages.push(data);
      });
    });

    socket.on('identify', function (name) {
      socket.set('name', String(name || 'Anonymous'), function (err) {
        updateRoster();
      });
    });
  });

function updateRoster() {
  async.map(
    sockets,
    function (socket, callback) {
      socket.get('name', callback)
// I'm b