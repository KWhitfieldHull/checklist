const { Router } = require('express');
const checklistController = require('../controllers/checklist');

const checklistRouter = Router();

checklistRouter.get("/", checklistController.index)
checklistRouter.get('/:id', checklistController.show);
checklistRouter.post("/new", checklistController.create)
checklistRouter.patch("/:id", checklistController.update)
checklistRouter.delete("/:id", checklistController.destroy)

module.exports = checklistRouter;