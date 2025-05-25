<template>
  <div class="min-h-screen flex flex-col">
    <header class="sticky top-0 z-10 border-b-2 border-gray-300 bg-gray-100 p-4 text-center">
      <h1 class="text-2xl font-bold">ToDo App</h1>
      <p class="text-sm text-gray-600">This is a simple ToDo app built with Vue.js and Nuxt.js.</p>
    </header>
    <main class="flex-1 overflow-y-auto" style="min-height:0;">
      <ToDoList />
    </main>
    <footer class="sticky bottom-0 z-10 bg-gray-100 p-4 text-center border-t border-gray-300">
      <p class="text-sm text-gray-600">
        Made with ❤️ by
        <a
          href="https://github.com/xmasvidal"
          class="text-blue-600 font-semibold underline hover:text-blue-800 transition"
          target="_blank"
          rel="noopener"
        >
          xmasvidal
        </a>
      </p>
    </footer>
  </div>
</template>