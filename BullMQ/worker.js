const { Worker } = require('bullmq')
const IORedis = require('ioredis');

const connection = new IORedis({
    host: '127.0.0.1',
    port: 6379,
    maxRetriesPerRequest: null,
    enableReadyCheck: false,
});

const sendEmail = () => new Promise((res, rej) => setTimeout(() => res(), 5 * 1000))

const worker = new Worker("email-queue", async (job) => {
    console.log("message id", job.id);
    console.log("job data", job.data);
    await sendEmail()
    console.log("email sent");
}, { connection })


worker.on('completed', (job) => {
    console.log(`Job ${job.id} completed`);
});

worker.on('failed', (job, err) => {
    console.error(`Job ${job.id} failed:`, err);
});