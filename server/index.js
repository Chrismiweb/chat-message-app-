const express = require("express")
const app = express()
const port  = 1200


app.use(express.json())

app.get((req, res)=>{
    res.send("app is running fine ");
})

app.listen(port, ()=>{
    console.log(`this port is running on port ${port}`)
})

