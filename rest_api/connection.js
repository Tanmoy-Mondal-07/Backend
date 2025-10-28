import mongoose from 'mongoose'

async function connectMongo(mongoUri) {
    mongoose
        .connect(mongoUri)
        .then(() => console.log("mongoo connected"))
        .catch((err) => console.log(err))
}

module.exports = {
    connectMongo,
}