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
    <div class="flex justify-between items-center mb-4" v-if="tasksStore.tasks.length > 0">
      <hr/>
      <br/>
      <span>Completed {{ tasksStore.tasks.filter(task => task.completed).length }} of {{ tasksStore.tasks.length }} tasks</span>
      <button
        @click="removeCompletedTasks"
        class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        v-if="tasksStore.tasks.length > 0"
      >
        Remove completed tasks
      </button>
    <hr/>
    <br/>
    </div>
    <ul class="divide-y divide-gray-200">
      <li
        v-for="(task, index) in tasksStore.tasks"
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
import { useTasksStore } from '~/composables/useTasksStore';
import type { Task } from '~/types/task';

const newTask = ref<Task>({
    text: "",
    completed: false,
});

const addTask = () => {
    if (newTask.value.text.trim() === "") {
        return;
    }
    tasksStore.addTask({
        text: newTask.value.text,
        completed: false,
    });
    newTask.value.text = "";
    newTask.value.completed = false;
};

const removeTask = (index: number) => {
    tasksStore.removeTask(index);
};

const toggleTask = (index: number) => {
    tasksStore.toggleTask(index);
};

const removeCompletedTasks = () => {
    tasksStore.removeCompletedTasks();
};

const tasksStore = useTasksStore();

</script>