const createTaskHtml = (id, name, description, assignedTo, dueDate, status) => {
    const htmlTask1 = `
    <li data-task-id=${id} class="d-flex row g-4 justify-content-center align-items-center">
        <div class="col-12 col-md-8 col-lg-9">
        <div class="card g-4" data-task-id=${id}>
            <div class="card-body"> 
                <div class="d-flex w-100 align-items-center justify-content-between align-items-center">
                <h4 class="card-text"><b>Name:</b> ${name}</h4>
                <h4><span class="badge ${status === 'TODO' ? 'bg-danger' : 'bg-success'}">${status}</span></h4>
                </div>
                <h4 class="card-text"><b>Description:</b> ${description}</h4>
                <h4 class="card-text"><b>Assigned To:</b> ${assignedTo}</h4>
                <h4 class="card-text"><b>Due Date:</b> ${dueDate}</h4>
                <button type="button" class="btn btn-success done-button ${status === 'TODO' ? 'visible' : 'invisible'}">Mark as Done</button>
                <button class="btn btn-outline-danger delete-button">Delete</button>
            </div>
        </div>
        </div>
    </li>
`;
return htmlTask1;
};
// const taskHtml = createTaskHtml("Kharmalina", "Task 5 completion", "Kharmalina", "04/08/2022", "IN PROGRESS")
// console.log(taskHtml);

// taskManager class that handles adding and rendering a new task every time submit button is clicked
class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }

addTask(name, description, assignedTo, dueDate) {

    const taskCardInfo = {
        id: this.currentId++,
        name: name,
        description: description,
        assignedTo: assignedTo,
        dueDate: dueDate,
        status: "TODO"
        }
        this.tasks.push(taskCardInfo);
    }
//create the deleteTask method 
deleteTask(taskId) {
    //create an empty array and store it in a new variable, newTasks
    const newTasks = [];

    //loop over the tasks
    for (let i=0; i< this.tasks.length; i++) {
        //get the current task in the loop
        const task = this.tasks[i];

        //check if the task id is not the task id passed in as a parameter
        if (task.id !== taskId) {
            //push the task to the newTasks array
            newTasks.push(task);
        }
    }
    //set this.tasks to newTasks
    this.tasks = newTasks;
}

getTaskById(taskId) {
    let foundTask;

    for(let i=0; i<this.tasks.length; i++) {
        const taskCardInfo = this.tasks[i];

        if(taskCardInfo.id === taskId) {
            foundTask = taskCardInfo;
        }
    }

    return foundTask;
}


render() {
    const tasksHtmlList = [];
    
    for(let i=0; i<this.tasks.length; i++) {
        // stores the current task 
        const taskCardInfo = this.tasks[i];
        // Date object
        const date = new Date(taskCardInfo.dueDate);
        // human-readable code of the dueDate property
        const formattedDate = `${date.getMonth() + 1} / ${date.getDate()} / ${date.getFullYear()}`;

        const taskHtml = createTaskHtml(taskCardInfo.id, taskCardInfo.name, taskCardInfo.description, taskCardInfo.assignedTo, formattedDate, taskCardInfo.status);
        tasksHtmlList.push(taskHtml);
    }

    const tasksHtml = tasksHtmlList.join("<br>");
    const tasksList = document.getElementById("tasksList");
    tasksList.innerHTML = tasksHtml;
}

//create the save method
save() {
//create a JSON string of the tasks
const tasksJson = JSON.stringify(this.tasks);

//Store the JSON string in localStorage
localStorage.setItem('tasks', tasksJson);

//Convert the currentId to a string;
const currentId = String(this.currentId);

//store the currentId in localStorage
localStorage.setItem('currentId', currentId);
}

//create the load method
load() {
//Check if any tasks are saved in localStorage
if (localStorage.getItem('tasks')) {
   //get the JSON string of tasks in localStorage
   const tasksJson = localStorage.getItem('tasks');
   //convert it to an array and store it in our TaskManager
   this.tasks = JSON.parse(tasksJson); 
}
//check if the currentId is saved in localStorage
if (localStorage.getItem('currentId')) {
    //get the currentId string in localStorage
    const currentId = localStorage.getItem('currentId');

    //convert the currentId to a number and store it in our TaskManager
    this.currentId = Number(currentId);
        }

    }
};
