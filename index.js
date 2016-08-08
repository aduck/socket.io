var express=require('express')
var app=express()
var server=require('http').Server(app)
var io=require('socket.io')(server)

app.get('/',function(req,res){
	res.sendfile('index.html')
})

io.on('connection',function(socket){
	console.log('有鱼上钩了')
	socket.on('disconnect',function(){
		console.log('鱼跑了')
	})
	socket.on('chat message',function(msg){
		//console.log(msg)
    io.emit('chat message',msg);
  });
})

server.listen(3000,function(){
	console.log('服务开启端口3000')
})