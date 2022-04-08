// let tasks = new TaskManager();
// console.log(tasks)



//add an 'onsubmit' event listener

const newTaskForm = document.querySelector('#newTaskForm');

newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();


//select the inputs
const newTaskForm = document.querySelector('#newTaskForm')
const newTaskNameInput = document.querySelector('#newTaskNameInput');
const newTaskAssignedTo = document.querySelector('#newTaskAssignedTo');
const newTaskDueDate = document.querySelector('#newTaskDueDate');
const errorMessage = document.querySelector('#alertMessage');


// get the values of the inputs
const name = newTaskNameInput.value;
const description = newTaskDescription.value;
const assignedTo = newTaskAssignedTo.value;
const dueDate = newTaskDueDate.value;

//add the task to the task manager
taskManager.addTask(name, description, assignedTo, dueDate);

//Clear the form
newTaskNameInput.value = '';
newTaskDesciption.value = '';
newTaskDueDue.value = '';

taskManager.addTask(name, description, assignedTo, dueDate);
 
//render the tasks
taskManager.render();

newTaskNameInput.value = '';
newTaskDecription.value = '';
newTaskAssignedTo.value = '';
newTaskDueDate.value = '';

});

const newTaskAssignedTo = document.querySelector('#newTaskAssignedTo');
const assignedTo = newTaskAssignedInput.value;
console.log("assignedTo:  "+assignedTo);