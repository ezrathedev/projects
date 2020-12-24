const express = require('express'); // importing the
const app = express(); // using the mod
const path = require('path');
const port = 3000;

app.use('/', (req, res) => {
    res.send('hello from the server')
})

app.listen(port, () => {
   console.log(`the server is running on >>>> localhost:3000 <<<<}`)
})
app.use('/contact', (req, res) => {
    res.sendfile(path.join(__dirname,req.url))
})
