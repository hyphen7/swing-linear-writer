const Express = require('express');
const app = Express();
const PORT = process.env.PORT || 3000;
const task1 = require('./task1.js');

app.use(Express.json());

app.get('/', (req, res) => {
    res.send("Hello, world!");
});

app.post('/api/v1/task1', (req, res) => {
    const key = req.headers['x-cron-key'] || req.body['x-cron-key'];
    console.log(key);
    if (key == process.env.EXEC_KEY) {
        console.log("Start Task1");
        task1().then(() => {
            console.log("End Task1");
        });
        res.json({message: "Exec Task1"});
    } else {
        console.log("Unauthorized Error");
        res.status(401).json({message: "Unauthorized"});
    }
});

app.listen(PORT, () => {
    console.log("Express is running.");
});