const Checklist = require("../models/Checklist")
const list = require("../list.json")

async function index(req, res) {
    try {
        const checklist = await Checklist.getAll();
        res.status(200).send({ data: checklist });

    } catch (err) {
        res.status(500).send({ error: err.message })
    }
}

async function show(req, res) {
    try {
        const id = parseInt(req.params.id);
        const checklist = await Checklist.getOneById(id);
        res.status(200).send({ data: items });
    } catch (err) {
        res.status(404).send({ "error": err.message })
    }
}

async function create(req, res) {
    const item = list.find((item) => item.name.toLowerCase() == req.body.name.toLowerCase());

    if (item != undefined) {

        res.status(409).send("The item already exists.");
    } else {
        maxId += 1;
        req.body.id = maxId;

        list.push(req.body);

        res.status(201).send(req.body);
    }
}







async function update(req, res) {
    try {
        const id = parseInt(req.params.id);
        const data = req.body;
        const itemToUpdate = await Checklist.getOneById(id)
        req.body.name ||= itemToUpdate.name
        req.body.text ||= itemToUpdate.text

        const updatedItem = await Checklist.updateItem(data, id);
        res.status(200).json(updatedItem);
    } catch (err) {
        res.status(404).json({ "error": err.message })
    }
}

async function destroy(req, res) {
    try {
        const id = parseInt(req.params.id);
        const item = await Checklist.getOneById(id);
        const result = await item.destroy(id);
        res.status(204).end();
    } catch (err) {
        res.status(404).json({ "error": err.message })
    }
}

module.exports = {index, show, create, update, destroy}