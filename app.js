var app = new Vue({
  el: '#app',
  data: {
    tasks: [
      { id: 1, name: "To-Do 1", description: "This is a Todo", completed: false },
      { id: 2, name: "To-Do 2", description: "This is completed", completed: true },
      { id: 3, name: "To-Do 3", description: "This is a Todo", completed: false },
      { id: 4, name: "To-Do 4", description: "This is completed", completed: true },
      { id: 5, name: "To-Do 5", description: "This is a Todo", completed: false },
    ],
    message: "Hello World!"
  }
})
