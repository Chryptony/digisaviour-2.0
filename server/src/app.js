const express = require("express");
const app = express()
const port = 3001
const cors = require("cors")
const database = require('./database')
const serverRoute = require('./routes/server.route')


app.use(cors(corsoption));
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000'
  }));
  
app.use(express.urlencoded({extended:true}))

database.sync(
    {force:true}
).then(()=>{
    console.info("DB sync")
}).catch((err)=>{
    console.error("failed to sync dattabase")
}

);

app.get("/",(req,res)=>{
    res.json({
        message: "Server Rest API"
    });
});

app.use("/api/servers",serverRoute)
app.listen(port,()=>console.log(`server up on port ${port}`));