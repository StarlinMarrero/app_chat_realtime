import express, { Request, Response } from 'express'
import config from './config'
import { connectionDB } from './database/connection';



const app = express();
const httpServer = require("http").createServer(app)
const io = require("socket.io")(httpServer, {
    cors:{
        origin: "*"
    }
});

io.on("connection", (socket: any) => {

    console.log("new connection", socket.conn.id)

})

app.get("/", (req:Request, res: Response) => {
    res.send("Hola")
})

//configs


//middlewares


//routes


connectionDB()
httpServer.listen(config.port, ()=>{
    console.log("server runnig on port:", config.port);
   
})

