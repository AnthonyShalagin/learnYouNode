var date = new Date();
var net = require('net');

var server = net.createServer(function (socket) {

	var data = date.getFullYear() + '-' + zeroCheck(date.getMonth()+1) + '-' + zeroCheck(date.getDate()) + ' ' + zeroCheck(date.getHours()) + ':' + zeroCheck(date.getMinutes());
    socket.write(data);
    socket.end('\n');
});

server.listen(process.argv[2]);

function zeroCheck(moment){
	return moment < 10 ? '0' + moment : moment;
}
