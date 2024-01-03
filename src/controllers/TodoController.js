const { getAlltaskService, createTaskService, deleteTaskService, editTaskService } = require("../services/TodoServices");
const { response } = require("../utils/helper");

const getAllTasksController = async (req, res) => {
  try {
    const TaskList = await getAlltaskService();
    res.json({ ...response, data: TaskList });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

const CreateTasksController = async (req, res) => {
  try {
    const ID = await createTaskService(req, res);
    res.json({ ...response, message: "Task Created successfully", data: ID });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

const deleteTaskController = async (req, res) => {
  try {
    const ID = await deleteTaskService(req, res);
    res.json({ ...response, message: "Task Deleted successfully" });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

const editTaskController = async (req, res) => {
  try {
    const ID = await editTaskService(req, res);
    res.json({ ...response, message: "Task updated successfully" });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { getAllTasksController, CreateTasksController, deleteTaskController, editTaskController };
