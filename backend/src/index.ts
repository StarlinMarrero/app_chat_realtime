import express, { Request, Response } from 'express'
import config from './config'
import { connectionDB } from './database/connection';



const app = express();
const httpServer = require("http").createServer(app)
const io = require("socket.io")(httpServer, {
    cors:{
        origin: '*',
        methods: ['GET', 'POST']
    }
});

io.on("connection", (socket: any) => {

    console.log("new connection", socket.conn.id)

    socket.on("client:message", (text:any) => {

        socket.emit("server:message", text)
    })

    
})


app.use(express.static(__dirname + "/public"))


//configs


//middlewares


//routes


connectionDB()
httpServer.listen(config.port, ()=>{
    console.log("server runnig on port:", config.port);
   
})

