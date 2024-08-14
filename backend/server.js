 import express from 'express'
 import notes from './data/notes.js'
 import dotenv from 'dotenv'


 const app = express()
dotenv.config();
 app.get('/', (req, res)=>{
        res.send('api is running')
 })

app.get('/api/notes', (req, res)=>{
       res.json(notes)
})

app.get('/api/notes/:id', (req, res)=>{
       const note = notes.find((n)=>n._id ===  req.params.id);
       res.send(note);
})


const PORT = process.env.PORT || 50001

 app.listen(PORT, console.log(`server is running port ${PORT}`))
