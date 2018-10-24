import { v4 as uuid } from "uuid";

const tasks = [];

export default {
  async addTask(task) {
    tasks.push({ id: uuid(), ...task, claimed: null, completed: false });
  },

  async getAllTasks() {
    return tasks;
  }
};
