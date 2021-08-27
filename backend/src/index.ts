import express from 'express'
import config from './config'
import { connectionDB } from './database/connection';


const app = express();


//configs


//middlewares


//routes


connectionDB()
app.listen(config.port, ()=>{
    console.log("server runnig on port:", config.port);
   
})

