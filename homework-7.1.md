//homework 7.1.md
/* Okay, so it seems that a lot of the functions here dont have names, but they have parameters.  
this is a little confusing, but I'm sure I will understand eventually.*/

//line 39
//path/to/file; server.js
//``` socket.on('message', function (msg)```
//function name is message... It has 1 parameter(msg);

//line 52
//path/to/file; server.js
//```messages.push(data);```
//This is a call statement to push(add to) message and display data when invoked.

//line 63
//path/to/file; server.js
//```function updateRoster()``` 
//funtion name is updateRoster...this is an empty function with no set parameter.

//line 64-68
//path/to/file; server.js
//``` {
  async.map(
    sockets,
    function (socket, callback) {
      socket.get('name', callback);
    },```
//This is the delaration statement for function updateRoster() in line 63

//line 69-71
//path/to/file; server.js
//```function (err, names) {
      broadcast('roster', names);
    }```
//this is a call statement broadcasting(passing thru) 2 parameters

//line 71
//path/to/file; server.js
//```function broadcast(event, data)```
//function name is broadcast...it has 2 parameters(event,data)

//line 76-79
//path/to/file; server.js
//```{
  sockets.forEach(function (socket) {
    socket.emit(event, data);
  });
}```
//This is the declaration statement for function in line 71