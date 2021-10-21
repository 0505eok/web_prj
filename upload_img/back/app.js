const express = require('express');
const app = express();
const imgRouter = require('./routes/img');
const path = require('path');

app.use(express.static(path.join(__dirname,"../front/build")));

app.use('/img',imgRouter);
app.listen(3000, () => {
    console.log("Server running at port 3000");
})