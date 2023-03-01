const express = require('express');
// const { use } = require('express/lib/application');
// const req = require('express/lib/request');
// const { rmSync } = require('fs');
// const { isGeneratorFunction } = require('util/types');
// const { resourceLimits } = require('worker_threads');
// const login = require('./models/oper');

let app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('./public'));
app.get('/', (req, res) => {
    return res.send("这是主页");
})


// app.listen(1234);
app.listen(80);