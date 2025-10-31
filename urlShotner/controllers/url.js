import { nanoid } from "nanoid";
import { URL } from "../models/urlSchema";

export async function handleGenerateShortURL(req, res) {
    const data = req.body
    if (!data.url) {
        return res.status(400).json({ error: 'url is required' })
    }
    const shortId = nanoid(10)
    await URL.create({
        shortId,
        redirectURL: data.url,
        visitHistory: []
    })

    return res.status(200).json({ id: shortId })
}