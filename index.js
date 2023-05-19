const express = require('express')
const app = express()

const port = 8080

const dog = [
    {"Breed": "TeeS", "Name": "Bosco"},
    {"Breed": "Mtaa", "Name": "Simba"}
]
app.get("/", (req, res) =>{
    res.send("hallo")
})
//crud== create, request, update , delet
//jhttp = post, get put//push and delet
app.listen(port, ()=>{
    console.log('am running at ${port}')
})

app.get("/mkuu/:id", (req,res){
    res.send("rada my guy ${req.params.id}")
})

app.get("dog/:id", (req, res) =>{
    res.json(dogs[parseInt(req.params.id)])
})