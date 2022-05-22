'use strict';
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
app.use(express.json())


//mongoDb package;


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/data-gouv');
const Data = mongoose.model('data-gouv', { id: String, organization: String, organization_id: String, backend: String, created_at: Date, validation: String });

app.get('/data', async (req, res) => {
    const allData = await Data.find();
    res.send(allData);
})

app.post('/create/data', async (req, res) => {
    const id = req.body.id;
    const organization = req.body.organization
    const organization_id = req.body.organization_id
    const backend = req.body.backend;
    const created_at = new Date();
    const validation = req.body.validation;

    const createData = new Data({ id: id, organization: organization, organization_id: organization_id, backend: backend, created_at: created_at, validation: validation })
    await createData.save();
    res.send('Data has been created successfully')
})

//get one data by id
app.get('/data/:id', async (req, res) => {
    const dataId = req.params.id;
    try {
        const getDataById = await Data.findById(dataId)
        res.send(getDataById);
    } catch (err) {
        res.send('data not found')
    }
})

app.get('/search/data/:organization', async (req, res) => {
    console.log("here")
    const organization = req.params.organization
    try {
        const searchData = await Data.find(({ organization: { $regex: organization } }));
        res.send(searchData)
    } catch (err) {
        res.send('data not found')
    }
})

//update one data by idÒ
app.patch('/update/data/:id', async (req, res) => {
    const dataId = req.params.id;
    const organization = req.body.organization
    const organization_id = req.body.organization_id
    const backend = req.body.backend;
    const created_at = new Date();
    const validation = req.body.validation;;
    try {
        const data = await Data.findById(dataId)
        data.organization = req.body.organization
        data.organization_id = req.body.organization_id
        data.backend = req.body.backend;
        data.validation = req.body.validation;;
        await data.save();
        res.send(data);
    } catch (err) {
        res.send('data not found')
    }
})
//delete one data by id

app.delete('/delete/data/:id', async (req, res) => {
    const dataId = req.params.id;
    try {
        console.log(dataId)
        const data = await Data.findById(dataId)
        await data.delete();
        await data.save();
        res.send('Data has been deleted');
    } catch (err) {
        res.send('data not found')
    }
})

app.get('/', async (req, res) => {
    console.log('ok');
    res.send('ok')
})

server.listen(3000, () => {
    console.log('listening on *:3000');
});