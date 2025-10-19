import express from 'express'
import users from './MOCK_DATA.json' assert { type: 'json' }

const app = express()
const PORT = 8000

app.get('/api/users', (req, res) => {
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
    return res.json(user)
})



app.listen(PORT, () => console.log('server running at port : ', PORT))