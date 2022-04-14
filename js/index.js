

// =======Step 4: Adding Tasks With The Form =======

const newTask = new TaskManager(); //Initialization of New Task
newTask.load(); //step 8 will load all task saved o local storage(values only)
newTask.render();//step 8 need here load card structure when refresh page(if saved in local)

/*===============Test to see if works ======================
newTask.addTask("mop", "mopping", "davis", 07 / 08 / 1989);
console.log(newTask.tasks)
=========================================================*/

//Step 4.1
const newTaskForm = document.querySelector("#newTaskForm"); //(select form )

// Add an 'onsubmit' event listener(1 of 2)
//Step 4.2/4.3
newTaskForm.addEventListener("submit", (e) => {
	// Prevent default action(so form won't submit)
	e.preventDefault();

	// Select the inputs
	const newTaskNameInput = document.querySelector("#newTaskNameInput");
	const newTaskDescription = document.querySelector("#newTaskDescription");
	const newTaskAssignedTo = document.querySelector("#newTaskAssignedTo");
	const newTaskDueDate = document.querySelector("#newTaskDueDate");
	const errorMessage = document.querySelector("#alertMessage");
	

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
	  newTaskForm.reset();   //This will clear form
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

//step 7.3  =================== another Click event (will change TODO to DONE) ==============
//this will effect the createTaskHtml
// Add an 'onclick' event listener to the Tasks List(2 of 2)
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

		//Will will save task card information to local storage
		newTask.save();

    // Render the tasks
    newTask.render(); //will rediaplay  the tasks with changed
  }

  // Check if a "Delete" button was clicked
  //adding an if statment for the delete button
  if(e.target.classList.contains('delete-button')){//step 9.2
  
    // Get the parent Task
    const parentTask = e.target.parentElement.parentElement.parentElement;
    console.log(parentTask)
    //taskId will be a string so need to convert to number  
    const taskId = Number(parentTask.dataset.taskId);

    //put the taskId as an arguement of delete() to delete taht task
    newTask.deleteTask(taskId);
    	//Will will save task card information to local storage
		newTask.save();

    // Render the tasks
    newTask.render(); //will redisplay the task card
  }
});



