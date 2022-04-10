

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

const newTask = new TaskManager(1); //Initialization of New Task

/*===============Test to see if works ======================
newTask.addTask("mop", "mopping", "davis", 07 / 08 / 1989);
console.log(newTask.tasks)
=========================================================*/

//Step 4.1
const newTaskForm = document.querySelector('#newTaskForm');

// Add an 'onsubmit' event listener
//Step 4.2/4.3
newTaskForm.addEventListener("submit", (e) => {
	// Prevent default action
	e.preventDefault();

	// Select the inputs
	const newTaskNameInput = document.querySelector("#newTaskNameInput");
	const newTaskDescription = document.querySelector("#newTaskDescription");
	const newTaskAssignedTo = document.querySelector("#newTaskAssignedTo");
	const newTaskDueDate = document.querySelector("#newTaskDueDate");
	const errorMessage = document.querySelector("#alertMessage");
	//needed to add somewhere!!!!!!!!!!

	/*Step 4.3 We need to get the values of input from form
  we alraedy trageted them with the variables above
so now we have to put thier 'values' into another
varable with a .value at the end.*/
  const name = newTaskNameInput.value;
	const description = newTaskDescription.value;
	const assignedTo = newTaskAssignedTo.value;
	const dueDate = newTaskDueDate.value;
});

newTask.addTask(this.name, this.description,this.assignedTo,this.dueDate);
console.log(newTask.addTask());

//step 5.3.2
newTask.render();