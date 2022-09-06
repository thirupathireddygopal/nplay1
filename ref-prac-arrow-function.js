//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasksItems = {
  // 1st property
  tasks: [
    {
      text: 'Grocery shopping',
      completed: true
    },
    {
      text: 'Clean yard',
      completed: false
    },
    {
      text: 'Film course',
      completed: false
    }
  ],
  // 2ns property
  getTasksToDo() {
    // used es6 function in order to use "this.tasks array"
    // const incompletedTasks = this.tasks.filter((task) => {
    //   return task.completed === false;
    // });
    // return incompletedTasks;

    // return this.tasks.filter((task) => {
    //   return task.completed === false
    // })
    // short hand arrow function syntax is used when it does not have pleanty of statements inside the function and no nested functionalities
    // "(task) => task.completed === false" >> short hand arrow function called everytime till array filteration completes 
    return this.tasks.filter((task) => task.completed === false)
  }
}

console.log(tasksItems.getTasksToDo())