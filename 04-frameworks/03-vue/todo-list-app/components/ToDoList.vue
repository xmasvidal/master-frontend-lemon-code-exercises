<template>
  <section class="max-w-xl mx-auto mt-10 bg-white rounded-xl shadow-lg p-8">
    <form
      @submit.prevent="addTask"
      class="flex gap-3 mb-6"
    >
      <input
        v-model="newTask.text"
        @keyup.enter="addTask"
        @keyup.esc="newTask.text = ''"
        placeholder="Task name"
        class="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        autofocus
      />
      <button
        class="bg-blue-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
      >
        Add
      </button>
    </form>
    <hr/>
    <br/>
    <div class="flex justify-between items-center mb-4">
      <span>Completed {{ tasks.filter(task => task.completed).length }} of {{ tasks.length }} tasks</span>
      <button
        @click="removeCompletedTasks"
        class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        v-if="tasks.length > 0"
      >
        Remove completed tasks
      </button>
    </div>
    <hr/>
    <br/>
    <ul class="divide-y divide-gray-200">
      <li
        v-for="(task, index) in tasks"
        :key="index"
        class="flex justify-between items-center py-3"
      >
        <label class="flex items-center gap-3 cursor-pointer w-full">
          <input
            type="checkbox"
            v-model="task.completed"
            @click="toggleTask(index)"
            class="accent-blue-500 w-5 h-5"
          />
          <span :class="{'line-through text-gray-400': task.completed, 'text-gray-800': !task.completed}">{{ task.text }}</span>
        </label>
        <button
          @click="removeTask(index)"
          class="text-red-500 hover:text-red-700 px-2 py-1 rounded transition"
        >
          Remove
        </button>
      </li>
    </ul>
  </section>
</template>
<script setup lang="ts">

interface Task {
    text: string;
    completed: boolean;
}

const newTask = ref<Task>({
    text: "",
    completed: false,
});
const tasks = ref<Task[]>([]);

const addTask = () => {
    if (newTask.value.text.trim() === "") {
        return;
    }
    tasks.value.push({
        text: newTask.value.text,
        completed: false,
    });
    newTask.value.text = "";
    newTask.value.completed = false;
    saveTasks();
};

const removeTask = (index: number) => {
    tasks.value.splice(index, 1);
    saveTasks();
};

const toggleTask = (index: number) => {
    console.log("toggleTask", index);

    tasks.value[index].completed = !tasks.value[index].completed;
    saveTasks();
};

const removeCompletedTasks = () => {
    tasks.value = tasks.value.filter((task) => !task.completed);
    saveTasks();
};
const saveTasks = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks.value));
};
const loadTasks = () => {
    const tasksFromStorage = localStorage.getItem("tasks");
    if (tasksFromStorage) {
        tasks.value = JSON.parse(tasksFromStorage);
    }
};
onMounted(() => {
    loadTasks();
});

</script>