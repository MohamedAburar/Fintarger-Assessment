import {createClient} from 'redis';
import { promisify } from 'util';

const redisClient= createClient({
    url: 'redis://localhost:6379',
});
redisClient.on('error',(err)=>{
    console.error('Redis client side error',err);
});
await redisClient.connect();

const lPushAsync = promisify(redisClient.lPush).bind(redisClient);
const rPopAsync = promisify(redisClient.rPop).bind(redisClient);

const TASK_QUEUE_KEY = 'task_queue';

const addToQueue = async (task) => {
  await lPushAsync(TASK_QUEUE_KEY, JSON.stringify(task));
};

const getNextTask = async () => {
  const task = await rPopAsync(TASK_QUEUE_KEY);
  return task ? JSON.parse(task) : null;
};

export{addToQueue,getNextTask};