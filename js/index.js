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
	const description = newTaskDescription.value;
	const assignedTo = newTaskAssignedTo.value;
	const dueDate = newTaskDueDate.value;

	//===== Validate our inputs function ======

  const checkForBlanks = () => {
    const errorList = [];

    if (!name || !description || !assignedTo || !dueDate) {
      errorList.push(`ERROR !! Please fill in all feilds.`);
      errorMessage.style.color = "red";
      errorMessage.innerHTML = `${errorList[0]}`;
    }
    else {
      newTask.addTask(name, description, assignedTo, dueDate);
      newTask.render(); //step 5.3.2
      this.name = '';
      errorMessage.style.display = "none"
    }
  }

  checkForBlanks(); //invoke the abive function
});

//Step 7.1 is the #id used in index.html for ul tag
//step 7.2 this is the id form step 7.1
const tasksList = document.querySelector("#taskList");

//step 7.3
//// Add an 'onclick' event listener to the Tasks List
tasksList.addEventListener('click', (e) => {
   // Check if a "Mark As Done" button was clicked
  if (e.target.classList.contains('done-botton')) {
    
  }
})

