var http = require('http'),

    socketIO = require('socket.io'),

    port = process.env.PORT || 8080,

    ip = process.env.IP || '127.0.0.1',

    server = http.createServer().listen(port, ip, function(){

        console.log('Socket.IO server started at %s:%s!', ip, port);

    }),

    io = socketIO.listen(server);

    io.set('match origin protocol', true);

    io.set('origins', '*:*');

    io.set('log level', 1);

    var run = function(socket){
        // Socket process here!!!
        socket.emit('greeting', 'Hello from Socket.IO');
        // 'user-join' event handler here
        
		socket.on('user-join', function(data){
			socket.emit('send8085',data);
			console.log('User %s have joined', data)

			});
		//socket.emit('respont',respont);
		//socket.emit('respont', '.....');
		//socket.on('greeting',function(data){console.log('--------',data)});

    }

    io.sockets.on('connection', run);
	