const list = require("../list.json")


class Checklist {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.text = data.text;
    }
    static async getAll() {
        const response = list
        return response
    }
    static async getOneById(id) {
        const response = list[id]
        return response
    }

    static async update(data, id) {
        const { name, text } = data
        list[id].name = name;
        list[id].text = text;
        return list[id]
    }

    static async destroy(id){
        list.splice(id, 1)
    }



}

module.exports = Checklist