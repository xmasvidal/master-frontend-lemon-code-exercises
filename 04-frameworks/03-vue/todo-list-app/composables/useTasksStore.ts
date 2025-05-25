import type { Task } from '~/types/task';

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: [] as Task[],
  }),
  actions: {
    addTask(task: Task) {
      this.tasks.push(task);
    },
    removeTask(index: number) {
      this.tasks.splice(index, 1);
    },
    toggleTask(index: number) {
      this.tasks[index].completed = !this.tasks[index].completed;
    },
    removeCompletedTasks() {
      this.tasks = this.tasks.filter(task => !task.completed);
    },
    setTasks(tasks: Task[]) {
      this.tasks = tasks;
    },
  },
});