

//const newTask = new TaskManager();// step 2.1.b
// console.log(newTask.currentId);              //step 2.2.b


//Testing the addTask() in our taskManager.js file

// const newTask2 = new TaskManager(this.currentId);
// newTask2.addTask(
// 		"mop",
//     "Prepare a healthy serving of pancakes for the family tonight",
//     "Davis",
//     "04/07/2022"
// 	)

//   console.log(newTask2)

// =======Step 4: Adding Tasks With The Form =======

const newTask = new TaskManager(); //Initialization of New Task



const newTaskForm = document.querySelector('#newTaskForm');

// Add an 'onsubmit' event listener
newTaskForm.addEventListener("submit", (e) => {
    // Prevent default action
         e.preventDefault();
 });


 // Select the inputs
    const newTaskNameInput = document.querySelector('#newTaskNameInput');
    const newTaskDescription = document.querySelector('#newTaskDescription');
    const newTaskAssignedTo = document.querySelector('#newTaskAssignedTo');
    const newTaskDueDate = document.querySelector('#newTaskDueDate');
    const errorMessage = document.querySelector('#alertMessage');
   //needed to add somewhere!!!!!!!!!!

