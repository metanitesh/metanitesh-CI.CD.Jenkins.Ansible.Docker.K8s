const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello master deployment<br><br> <a href="/courses">courses</a>'));
app.get('/courses', (req, res) => res.json([{
    id:1,
    name:'cloud-devops'
},{
    id:2,
    name:'cloud-developer'
},{
    id:3,
    name:'data-engineer'
},{
    id:1,
    name:'machine-learning'
}]));


app.listen(port, () => console.log(`Example app listening on port ${port}!`));