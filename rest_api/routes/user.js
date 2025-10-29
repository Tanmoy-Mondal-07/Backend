import express from 'express'
import { handelGetAllUser } from '../controllers/user'

const router = express.router();

router.get('/api/users', (req, res) => {
    // res.setHeader("x-myname", "name") //als add "x-" in custom headers , for good prs8
    // return res.json(users)

})

app.get('/', (req, res) => {
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
router.get('/:id', (req, res) => {
    const { id } = req.params
    const user = users.find((user) => user.id == id)
    return res.status(201).json(user)
})

router.post('/', async (req, res) => {
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

router.patch('/:id', (req, res) => {
    //update user
    return res.json({ status: 'pending' })
})

module.exports = router