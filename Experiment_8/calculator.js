const express = require('express');
const app = express();
const port = 3000;

app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;
    const result = parseFloat(num1) + parseFloat(num2);
    res.send(`Result of ${num1} + ${num2} = ${result}`);
});

app.get('/subtract', (req, res) => {
    const { num1, num2 } = req.query;
    const result = parseFloat(num1) - parseFloat(num2);
    res.send(`Result of ${num1} - ${num2} = ${result}`);
});

app.get('/multiply', (req, res) => {
    const { num1, num2 } = req.query;
    const result = parseFloat(num1) * parseFloat(num2);
    res.send(`Result of ${num1} * ${num2} = ${result}`);
});

app.get('/divide', (req, res) => {
    const { num1, num2 } = req.query;
    if (parseFloat(num2) === 0) {
        res.status(400).send('Error: Division by zero');
    } else {
        const result = parseFloat(num1) / parseFloat(num2);
        res.send(`Result of ${num1} / ${num2} = ${result}`);
    }
});

app.get('/', (req, res) => {
    res.send('Welcome to the basic calculator API!');
});

app.use((req, res) => {
    res.status(404).send('Invalid endpoint');
});

app.listen(port, () => {
    console.log(`Calculator server is running at http://localhost:${port}`);
});
