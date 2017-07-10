$(document).ready(function(){
        var socket = io.connect('http://127.0.0.1:8087');
        socket.on('greeting', function(data){ alert(data);})
		
        $('#go').click(function(){
			//socket.on('respont', function(dd){ alert(dd);})
            socket.emit('user-join',$('#name').val());
			//socket.emit('greeting',$('#name').val());
			
        })
		
		
    })
	
	