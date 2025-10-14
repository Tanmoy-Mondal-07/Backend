const { Queue } = require('bullmq')

const notifcationQueue = new Queue('email-queue', {
    connection: {
        host: '127.0.0.1',
        port: 6379,
    },
    defaultJobOptions: {
        removeOnComplete: true,
        attempts: 2
    }
})

async function init() {
    const res = await notifcationQueue.add('email to me', {
        email: "me@gmail.com",
        subject: "idk",
        body: "hlo"
    }, { priority: 1 })
    console.log(res.id);
}

init()