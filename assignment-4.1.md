//assignment 4.1

//path file; jwells47/dsscheckout/server.js
``` var data = {
          name: name,
          text: text
        }```
//list.keys (name, text);
//the variable is 'var data'

//path file; jwells47/dsscheckout/server.js
```var router = express();
var server = http.createServer(router);
var io = socketio.listen(server);

router.use(express.static(path.resolve(__dirname, 'client')));
var messages = [];
var sockets = [];```
//This is an example of a dictionary of variable being set for this simple server...however variable/keys are subject to change.
