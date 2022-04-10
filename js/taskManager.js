//=========================================================
//When create a function why not work if use {}?

const createTaskHtml = (name, description, assignedTo, dueDate, status) => 
                   `<div class="card-body">
                    <!--================ Task 1 =================--> 
                    <p class="card-title">Task 1</p>
                    <p class="card-text">Name: ${name}</p>
                    <p class="card-text">Description: ${description}</p>
                    <p class="card-text">Assigned To: ${assignedTo}</p>
                    <p class="card-text">Due Date: ${dueDate}</p>
                    <p class="card-text">Status:${status} </p>
                    <div class="btn-group"><a href="#" class="btn btn-primary">Edit</a></div>
                    <div class="btn-group"><a href="#" class="btn btn-primary">Delete</a></div>
                   </div>
                   `
;

console.log(createTaskHtml("mop", "mop over", "davis", "07/06/2003", "todo"));

;


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
		const tasksHtnmList = []; //Step 5.2.2
		let renderTask = this.tasks.forEach((i) => {
			const task = this.tasks[i]; //step 5.2.3.i

			const date = new Date(task.dueDate); //Step 5.2.3.ii
			const formattedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`; //step 5.2.3.iii

			// Pass the task id as a parameter
			const taskHtml = createTaskHtml(
				//step 5.2.3.iv
				task.id,
				task.name,
				task.description,
				task.assignedTo,
				formattedDate,
				task.status
			);
			tasksHtmlList.push(taskHtml); //step 5.2.3.v
		}); //for each() ending

		const tasksHtml = tasksHtmlList.join("\n"); ////step 5.2.4

		const tasksList = document.querySelector("#tasksList");
		tasksList.innerHTML = tasksHtml; //Step 5.2.6
	}//render() ending
  } //class ending }






