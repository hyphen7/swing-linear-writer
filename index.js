const Express = require('express');
const app = Express();
const PORT = process.env.PORT || 3000;

app.use(Express.json());

app.get('/', (req, res) => {
    res.send("Hello, world!");
});

app.post('/api/v1/task1', (req, res) => {
    const key = req.body['x-cron-key'];
    if (key == process.env.EXEC_KEY) {
        console.log("Exec Task1");
        task1().then(() => {
            console.log("End Task1");
        });
        res.send("Exec Task1");
    } else {
        console.log("Invalid KEY");
        res.send("Invalid KEY");
    }
});

app.listen(PORT, () => {
    console.log("Express is running.");
});

async function task1() {
    await new Promise(resolve => setTimeout(resolve, 3000));
}