import dotenv from "dotenv"
dotenv.config({
    path: ".env"
})
import express from "express"

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res) =>{
    res.send('harsh')
})

app.get('/login',(req,res)=>{
    res.send('<h1>hello</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})