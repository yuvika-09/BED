const express = require('express');
const app = express();  
app.use(express.json());
app.use(express.urlencoded({extended:true}));

let {Queue, Worker} = require("bullmq")

let prediction_queue = new Queue("predict",{
    connection: {
        host: 'localhost',
        port: 6379,
    },
})

// PRODUCER
async function addJobs() {
  let job = await prediction_queue.add('predict', { foo: 'bar' });
//   await prediction_queue.add('myJobName', { qux: 'baz' });
return job;
}

// addJobs()
// .then((job)=>{
//     console.log(job.id)
// })

// CONSUMER
const myWorker = new Worker('predict', async job => {
    console.log(job.id)
}, {
  connection: {
    host: 'localhost',
    port: 6379,
  },
});


app.listen(4334,()=>{
    console.log("server started");
})