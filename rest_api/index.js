import express from 'express'
import users from './MOCK_DATA.json' assert { type: 'json' }
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = 8000

// mongoose
//     .connect(process.env.MONGODB_URI)
//     .then(()=>console.log("mongoo connected"))
//     .catch((err)=>console.log(err))

//schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    joTitle: {
        type: String,
    },
    gender: {
        type: String
    }
})

const User = mongoose.model("user", userSchema)

//middleware

app.use(express.urlencoded({ extended: false }))

app.use((req, res, next) => {
    console.log("hlo from middleware 1");
    req.myUserName = "username"
    next()
})

app.use((req, res, next) => {
    console.log("hlo from middleware 2 : ", req.myUserName);
    next()
})

app.get('/api/users', (req, res) => {
    res.setHeader("x-myname", "name") //als add "x-" in custom headers , for good prs8
    return res.json(users)
})

app.get('/users', (req, res) => {
    const rows = users.map(u => `
    <tr>
      <td>${u.id}</td>
      <td>${u.first_name}</td>
      <td>${u.last_name}</td>
      <td>${u.email}</td>
      <td>${u.gender}</td>
      <td>${u.job_title}</td>
    </tr>`).join('')

    res.send(`<html> <body> <table> ${rows} </table> </body> </html>`)
})

// dynamic route
app.get('/api/users/:id', (req, res) => {
    const { id } = req.params
    const user = users.find((user) => user.id == id)
    return res.status(201).json(user)
})

app.post('/api/users', (req, res) => {
    //creat new user
    return res.json({ status: 'pending' })
})

app.patch('/api/users/:id', (req, res) => {
    //update user
    return res.json({ status: 'pending' })
})

app.listen(PORT, () => console.log('server running at port : ', PORT))