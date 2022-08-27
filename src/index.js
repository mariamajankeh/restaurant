const { json } = require('express')
const express = require('express')
const { restart } = require('nodemon')
const app = express()
const port = 3000

const middleware = require('./utilities/middleware')

app.use(express.json())


const me = {
  fname: 'jankeh',
  minit: 'E',
  Lname:'secka',
  id: '020',
  picture:'jpg',
  status:'online',
  dob: '19/10/2000',
  gender:'female',
  phone: '3477872',
  email: 'jankz@gmail.com',
  living:'true',
}

let users = [
  {
    
    id: 1,
    username: 'jankz',
    phone: '2324556',
    password: 'beauty1'
  },
  


  {
    id: 2,
    username: 'mariam',
    phone: '123455',
    password: '1233'
  }

]


 app.get('/me',(req,res) => {
  res.json(me)

 }
 )

 

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.get('/api/users/:id', (req, res) => {
  const id = req.params.id
  const user = users.find((user) => user.id ===Number (id))
  res.json(user)
  })

  app.get('/api/users', (req, res) => {
    res.json(users)
  })

  app.delete('/api/users/:id', (req, res) => {
    const id = req.params.id
    users = users.filter((u) => u.id !== Number(id))

    res.status(204).end()
  })

  app.post('/api/users', (req, res) =>{

    const content = req.body

    res.json(content)
  })

  app.put('/api/users/:id', (req, res) => {
    const id = req.params.id

  })

  app.use(middleware.unknownEndpoint)


  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})








    
