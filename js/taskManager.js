const createTaskHtml = (name, description, assignedTo, dueDate, status) => {
    const htmlTask1 = `
    <li class="d-flex row g-4 justify-content-center align-items-center">
        <div class="col-12 col-md-8 col-lg-9">
        <div class="card g-4">
            <div class="card-body"> 
                <div class="d-flex w-100 align-items-center justify-content-between align-items-center">
                <h4 class="card-text"><b>Name:</b> ${name}</h4>
                <span class="badge badge-danger">${status}</span>
                </div>
                <h4 class="card-text"><b>Description:</b> ${description}</h4>
                <h4 class="card-text"><b>Assigned To:</b> ${assignedTo}</h4>
                <h4 class="card-text"><b>Due Date:</b> ${dueDate}</h4>
                <br>
            </div>
        </div>
        </div>
    </li>
`;
return htmlTask1;
};
// const taskHtml = createTaskHtml("Kharmalina", "Task 5 completion", "Kharmalina", "04/08/2022", "IN PROGRESS")
// console.log(taskHtml);

// taskManager class
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

render() {
    const tasksHtmlList = [];
    
    for(let i=0; i<this.tasks.length; i++) {
        // stores the current task 
        const taskCardInfo = this.tasks[i];
        // Date object
        const date = new Date(taskCardInfo.dueDate);
        // human-readable code of the dueDate property
        const formattedDate = `${date.getMonth() + 1} / ${date.getDate()} / ${date.getFullYear()}`;
        const taskHtml = createTaskHtml(taskCardInfo.name, taskCardInfo.description, taskCardInfo.assignedTo, formattedDate, taskCardInfo.status);
        tasksHtmlList.push(taskHtml);
    }

    const tasksHtml = tasksHtmlList.join("/n");
    const tasksList = document.getElementById("tasksList");
    tasksList.innerHTML = tasksHtml;
}
};