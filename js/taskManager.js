const createTaskHtml = (id, name, description, assignedTo, dueDate, status) => {
    const htmlTask1 = `
    <li class="d-flex row g-4 justify-content-center align-items-center">
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
                <br>
                <div class="task-button">
                    <button type="button" class="btn btn-danger delete-button ${status === 'TODO' ? 'invisible' : 'invisible'}">Delete</button>
                    <button type="button" class="btn btn-success btn-lg done-button ${status === 'TODO' ? 'visible' : 'invisible'}">Mark as Done</button>
                    <button type="button" class="btn btn-danger btn-lg delete-button ${status === 'TODO' ? 'invisible' : 'visible'}">Delete</button>
                </div>
            </div>
        </div>
        </div>
    </li>
`;
return htmlTask1;
};
// const taskHtml = createTaskHtml("Kharmalina", "Task 5 completion", "Kharmalina", "04/08/2022", "IN PROGRESS")
// console.log(taskHtml);

// taskManager class that handles adding and rendering a new task every time submit button is clicked. Methods to delete, save tasks in localStorage and keep tasks on website after refresh
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


    
deleteTask(taskId) {
    const newTasks = [];
    for (let i=0; i<this.tasks.length; i++) {
        const task = this.tasks[i];
        // task.id is currentId++ and taskId is the dataset
        if (task.id !== taskId) {
            newTasks.push(task);
        }
    }
    // newTasks is the tasks left. we are reassigning this.tasks, completely changing the data stored
    this.tasks = newTasks;
    // console.log(newTasks);
    console.log(newTasks);
    // if the length of the array of new tasks is 0, the Task Manager text will disappear
    if (newTasks.length === 0) {
        tmTitle.style.display = "none";
    }
    console.log(newTasks);

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


save() {
    const tasksJson = JSON.stringify(this.tasks);
    localStorage.setItem("tasks", tasksJson);
    const currentId = String(this.currentId);
    localStorage.setItem("currentId", currentId);
}

load() {
    if (localStorage.getItem("tasks")) {
        const tasksJson = localStorage.getItem("tasks");
        this.tasks = JSON.parse(tasksJson);
    }

    if (localStorage.getItem("currentId")) {
        const currentId = localStorage.getItem("currentId");
        this.currentId = Number(currentId);
    }
}

};