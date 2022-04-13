//=========================================================
//have to call this function at the end
//done-button class use for tasksListId.addEventListener
const createTaskHtml = (id, name, description, assignedTo, dueDate, status) => {
	const htmlTask1 = `
    <li data-task-id=${id} class="d-flex row g-4 justify-content-center align-items-center">
        <div class="col-12 col-md-8 col-lg-5">
        <div class="card g-4" data-task-id=${id}>
             <div class="card-body"> 
                <div class="d-flex w-100 align-items-center justify-content-between align-items-center">
                <h4 class="card-text"><b>Name:</b> ${name}</h4>
                <h4><span class="badge ${
									status === "TODO" ? "bg-danger" : "bg-success"
								}">${status}</span></h4>
                </div>
                <h4 class="card-text"><b>Description:</b> ${description}</h4>
                <h4 class="card-text"><b>Assigned To:</b> ${assignedTo}</h4>
                <h4 class="card-text"><b>Due Date:</b> ${dueDate}</h4>
                <br>
            <div class="bottomTaskButtons"> 
                 
                  <button class="btn btn-danger delete-button ${
										status === "TODO" ? "invisible" : "visible"
									}">Delete</button>
                     <button type="button" class="btn btn-success done-button ${
												status === "TODO" ? "visible" : "invisible"
											}">Mark as Done</button>
                       <button class="btn btn-primary save-button ${
													status === "TODO" ? "invisible" : "visible"
												}">SAVE</button>
                   
                  
            </div>      
            </div>
        </div>
        </div>
    </li>
`;
	return htmlTask1;
};

// console.log(createTaskHtml(1, "mop", "mop over", "davis", "07/06/2003", "todo"));

//=========================================================
class TaskManager {
	//step 2.1.a
	// Set up the tasks and currentId property in the contructor
	constructor(currentId = 0) {
		this.currentId = currentId;
		this.tasks = []; //step 2.2.a
	}

	// step 2.1.b / step 2.2.b (in index.js)

	//step 3 -
	// *** Create the addTask method to ****
	//add task to this.task array. This is done by
	//creating a task{}(task object) and using our
	// input questions as perameters.
	//The questions will be the keys and answers are values
	// step 3.3

	addTask(name, description, assignedTo, dueDate) {
		const task = {
			id: this.currentId++, // step 4
			name: name,
			description: description,
			assignedTo: assignedTo,
			dueDate: dueDate,
			status: "TODO", //default status
		};

		this.tasks.push(task); //step 3.5 (this is what it is pushed to array above)
	}

/*===========================================
 create a *getTaskById() method**. Step7.4.2
 ===========================================*/

  getTaskById(taskId) { // this taskId comes from the "const createTaskHtml" above
		let foundTask;     // the /data-task-id=${id}/ is converted totaskId  
		// Loop over the tasks and find the task with the id passed as a parameter
		for (let i = 0; i < this.tasks.length; i++) {
			// Get the current task in the loop
			const task = this.tasks[i];

			// Check if its the right task by comparing the task's id to the id passed as a parameter
			if (task.id === taskId) {
				//store task in the found task variable
				foundTask = task;
			}
		}
		// Return the found task
		return foundTask;
	}


//================ Task 8: Persisting Tasks to LocalStorage =====================

save(){

}


	/*===================================
 create a **render() method**. Step5.2
 ======================================*/
	render() {
		const tasksHtmlList = []; //Step 5.2.2
		// let renderTask = this.tasks.forEach((i) => {
		//const task = this.tasks[i]; //step 5.2.3.i

		for (let i = 0; i < this.tasks.length; i++) {
			const task = this.tasks[i];

			const date = new Date(task.dueDate); //Step 5.2.3.ii
			const formattedDate = `${
				date.getMonth() + 1
			}/${date.getDate()}/${date.getFullYear()}`; //step 5.2.3.iii

			const taskHtml = createTaskHtml(
				//step 5.2.3.iv
        task.id,  //Step7.3.5 9add task.id
				task.name,
				task.description,
				task.assignedTo,
				formattedDate,
				task.status
			);

			tasksHtmlList.push(taskHtml); //step 5.2.3.v
		} //for loop() ending

		const tasksHtml = tasksHtmlList.join("/n"); ////step 5.2.4

		const tasksList = document.querySelector("#tasksList");
		tasksList.innerHTML = tasksHtml;
	} //render() ending
} //class ending }

//===================================================================================
// render() {
//     const tasksHtmlList = [];

//     for(let i=0; i<this.tasks.length; i++) {
//         // stores the current task
//         const taskCardInfo = this.tasks[i];
//         // Date object
//         const date = new Date(taskCardInfo.dueDate);
//         // human-readable code of the dueDate property
//         const formattedDate = `${date.getMonth() + 1} / ${date.getDate()} / ${date.getFullYear()}`;
//         const taskHtml = createTaskHtml(taskCardInfo.name, taskCardInfo.description, taskCardInfo.assignedTo, formattedDate, taskCardInfo.status);
//         tasksHtmlList.push(taskHtml);
//     }

//     const tasksHtml = tasksHtmlList.join("/n");
//     const tasksList = document.getElementById("tasksList");
//     tasksList.innerHTML = tasksHtml;
//}
//===================================================================================
