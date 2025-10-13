const { Queue } = require('bullmq')

const notifcationQueue = new Queue('email-queue')

async function init() {
    const result = await notifcationQueue.add('email to me', {
        email: "me@gmail.com",
        subject: "idk",
        body:"hlo"
    })
    console.log(result);
}

init()