const express = require('express')
const familyRouter= require('./router/familyRouter')
require('./config/config')
const port = process.env.port

const app = express()

app.use(express.json())
app.use ('/uploads',express.static("uploads"))
app.use("/api/v1",familyRouter)

app.listen(port,()=>{
    console.log(`server is listening on port:${port}`)
})
