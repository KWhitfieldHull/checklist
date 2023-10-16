const express = require('express');
const cors = require('cors');

const checklistRouter = require("./routers/checklist")

const api = express();

api.use(cors());
api.use(express.json());


api.use("/checklist", checklistRouter)

module.exports = api
