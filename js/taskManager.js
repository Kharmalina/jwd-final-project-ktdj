//=========================================================
//When create a function why not work if use {}?

const createTaskHtml = (name, description, assignedTo, dueDate, status) =>{
  const htmlTask = `<li>
	                    <div class="row g-4 row d-flex justify-content-center">
                        <div class="col-12 col-md-6 col-lg-4">
                          <div class="card g-4">
                            <div class="card-body">                     
                               <p class="card-text">Name: ${name}</p>
                               <p class="card-text">Description:${description}</p>
                               <p class="card-text">Assigned To: ${assignedTo} </p>
                               <p class="card-text">Due Date:${dueDate}</p>
                               <p class="card-text">Status: ${status}</p> 
																<button class="btn btn-success"}">Mark As Done</button>
                                <button class="btn btn-danger delete-button">Delete</button>
													  </div>                    
                          </div>
                        </div>								
                       </div>				
                      </li>`;



return htmlTask;
}
console.log(createTaskHtml("mop", "mop over", "davis", "07/06/2003", "todo"));




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

	/*===================================
 create a **render() method**. Step5.2
 ======================================*/
  render() {
		const tasksHtmlList = []; //Step 5.2.2
		// let renderTask = this.tasks.forEach((i) => {
		//const task = this.tasks[i]; //step 5.2.3.i

		for(let i=0; i< this.tasks.length; i++){
      const task = this.tasks[i]
		
		
			const date = new Date(task.dueDate); //Step 5.2.3.ii
			const formattedDate = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`; //step 5.2.3.iii


			const taskHtml = createTaskHtml(
				//step 5.2.3.iv	
				task.name,
				task.description,
				task.assignedTo,
				formattedDate,
				task.status
			);

			tasksHtmlList.push(taskHtml); //step 5.2.3.v
			}; //for loop() ending

		const tasksHtml = tasksHtmlList.join("/n"); ////step 5.2.4

		const tasksList = document.querySelector("#tasksList");
		tasksList.innerHTML = tasksHtml;
	}//render() ending
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