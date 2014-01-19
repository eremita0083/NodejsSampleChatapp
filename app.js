/**
 * Module dependencies.
 */

<<<<<<< HEAD
var express = require('express'), http = require('http'), path = require('path'), io = require('socket.io');
=======
/*
	test
*/

var express = require('express')
, http = require('http')
, path = require('path')
, io = require('socket.io');
>>>>>>> e2118c49404b977ddfefdb1503680c8d5503bb79

var app = express(), server = require('http').createServer(app), io = io.listen(server);

// all environments
app.configure(function() {
	app.set('port', process.env.PORT || 3000);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(express.favicon());
	app.use(express.logger('dev'));
	// app.use(express.bodyParser()); connect3.0で使えなくなるよという警告が出るので、下の二行を追加し、この行をremoveする。
	app.use(express.json());
	app.use(express.urlencoded()); //express.bodyParserはこの2行に置き換えることができ、その場合multipart()はコネクト３で外されるよという警告はでなくなる
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function() {
	app.use(express.errorHandler());
});

server.listen(app.get('port'))

io.sockets.on('connection', function(socket) {
	socket.on('message:send', function(data) {
		io.sockets.emit('message:receive', {
			message : data.message
		});
	});
});

