import express from 'express'
import users from './MOCK_DATA.json' assert { type: 'json' }
import { User } from './models/User'
import dotenv from 'dotenv'
import userRouter from './routes/user'
import { connectMongo } from './connection'
import { logrequest } from './middleWares'


dotenv.config()

const app = express()
const PORT = 8000
connectMongo(process.env.MONGODB_URI)

//middleware
app.use(express.urlencoded({ extended: false }))

app.use((req, res, next) => {
    console.log("hlo from middleware 1");
    req.myUserName = "username"
    next()
})

app.use(logrequest('log.txt'))

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

app.post('/api/users', async (req, res) => {
    //creat new user

    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender
    })
    console.log(result);
    return res.json({ status: 'pending' })
})

app.patch('/api/users/:id', (req, res) => {
    //update user
    return res.json({ status: 'pending' })
})

app.use("/user", userRouter)

app.listen(PORT, () => console.log('server running at port : ', PORT))