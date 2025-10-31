import express from 'express'
import urlRoute from './routes/url'
import { URL } from './models/urlSchema'

const app = express()
const PORT = 8000

app.use("/url", urlRoute)

app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const eantry = await URL.findOneAndUpdate({
        shortId
    }, { $push: { visitHistory: { timestamp: Date.now() } } })
    res.redirect(eantry.redirectURL)
})

app.listen(PORT, () => console.log('server started'))