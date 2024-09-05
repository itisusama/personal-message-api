const express = require("express")
const cors = require("cors")
const mongoose = require('mongoose')
const umessages = require("./api/routes/umessages")

const app = express()
// Enable CORS for all routes
app.use(cors());
app.use(express.json())
app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})
// Request Handeling
app.use('/api/umessage', umessages);

mongoose.connect("mongodb+srv://itisusama:UH123ook@umessageapp.e5wku.mongodb.net/?retryWrites=true&w=majority&appName=UMESSAGEapp")
.then(() => {
    app.listen(3005, () => {
        console.log(`The app listening on port ${3005}`)
    })
}).catch((error) => {console.error(error)})