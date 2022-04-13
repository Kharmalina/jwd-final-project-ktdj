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

/*===============Test to see if works ======================
newTask.addTask("mop", "mopping", "davis", 07 / 08 / 1989);
console.log(newTask.tasks)
=========================================================*/

//Step 4.1
const newTaskForm = document.querySelector("#newTaskForm");

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

	// 	/*Step 4.3 We need to get the values of input from form
	//   we already targeted them with the variables above
	// so now we have to put their 'values' into another
	// variable with a .value at the end.*/
	let name = newTaskNameInput.value;
	let description = newTaskDescription.value;
	let assignedTo = newTaskAssignedTo.value;
	let dueDate = newTaskDueDate.value;

	//===== Validate our inputs function ======

  const checkForBlanks = () => {
    const errorList = [];

    if (!name || !description || !assignedTo || !dueDate) {
      errorList.push(`ERROR !! Please fill in all fields.`);
      errorMessage.style.color = "red";
      errorMessage.innerHTML = `${errorList[0]}`;
    }
    else {
	  newTask.addTask(name, description, assignedTo, dueDate);
	  newTask.render(); //step 5.3.2
	  // newTaskForm.reset();   //This will clear form
	  errorMessage.style.display = "none";
	}
  }
  checkForBlanks(); //invoke the abive function
});

//================  Task 7: Update A Task =====================

//Step 7.1 is the #id used in index.html for ul tag
//step 7.2 this is the id form step 7.1
// 
const tasksListId = document.querySelector("#tasksList");

//step 7.3
//this will effect the createTaskHtml
// Add an 'onclick' event listener to the Tasks List
tasksListId.addEventListener('click', (e) => {

  // Check if a "Mark As Done" button was clicked
  if (e.target.classList.contains('done-button')) {

    // Get the parent Task(each .parentEllement move up selector by one parent)
    const parentTask = e.target.parentElement.parentElement.parentElement;//had to use 3 insted off 2 ?)
    console.log(parentTask)
    
    // Get the taskId of the parent Task.
    const taskId = Number(parentTask.dataset.taskId);

    // Get the task from the TaskManager using the taskId
    const taskCardInfo = newTask.getTaskById(taskId); 
        //taskId changes to data-task-id =${id} in the createTaskHtml function
    // Update the task status to 'DONE'
    taskCardInfo.status = "DONE";

    // Render the tasks
    newTask.render(); //will re diaply the taske with changes
  }
});

