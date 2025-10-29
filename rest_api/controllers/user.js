import users from './MOCK_DATA.json' assert { type: 'json' }

async function handelGetAllUser(req, res) {
    res.setHeader("x-myname", "name") //als add "x-" in custom headers , for good prs8
    return res.json(users)
}

module.exports={
    handelGetAllUser,
}