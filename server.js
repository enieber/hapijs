var Hapi = require('hapi')

var server = new Hapi.Server()

server.connection({port: 3000})

server.start(function() {
    console.log("Server running at:", server.info.uri)
    })

server.route({
    method:'GET',
    path:'/',
    handler: function(request, reply){
	    reply('Hello Word!')
	}
    })

server.route({
    method:'GET',
    path:'/{name}',
    handler: function(req, rep){
	rep("Hello "+encodeURIComponent(req.params.name))
	}
    })
