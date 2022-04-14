
const taskManager = new TaskManager(0);

taskManager.load();

taskManager.render();

const newTaskForm = document.querySelector("#newTaskForm");

// newTaskForm.addEventListener('submit', (event) => {
//     event.preventDefault();

// })

const newTaskNameInput = document.getElementById('newTaskNameInput');
const newTaskDescription = document.getElementById('newTaskDescription');
const newTaskAssignedTo = document.getElementById('newTaskAssignedTo');
const newTaskDueDate = document.getElementById('newTaskDueDate');
const alert = document.querySelector('.alert');


// validation code
const validFormFieldInput = () => {
    if (!newTaskNameInput.value || !newTaskDescription.value || !newTaskAssignedTo.value || !newTaskDueDate.value) {
        let errorList = [];
        if (!newTaskNameInput.value) {
            errorList.push(" Name");
        }
        if (!newTaskDescription.value) {
            errorList.push(" Description");
        }
        if (!newTaskAssignedTo.value) {
            errorList.push(" Assigned To");
        }
        if (!newTaskDueDate.value) {
            errorList.push(" Due Date");
        }
        alert.classList.add("invalid-form-alert");
        alert.classList.remove("hide-alert");
        alert.innerHTML = `All fields are required! Please check the following field(s):${errorList.toString()}`;
        return false;
    }
    else {
        if (alert.classList.contains("invalid-form-alert")) {
            alert.classList.remove("invalid-form-alert");
            console.log("yay");
        }
        if (!alert.classList.contains("hide-alert")) {
            alert.classList.add("hide-alert");
        }
        console.log(`name: ${newTaskNameInput.value} description: ${newTaskDescription.value} assigned: ${newTaskAssignedTo.value} due date: ${newTaskDueDate.value}`);
        return true;
    }
}

newTaskForm.addEventListener("submit", (e) => {
e.preventDefault();


// Validation code when click submit button

let isFormValidation = validFormFieldInput();

if(isFormValidation){
    
    taskManager.addTask(newTaskNameInput.value,newTaskDescription.value,newTaskAssignedTo.value,newTaskDueDate.value);
    // console.log(taskManager.tasks);
    
    taskManager.render();
    newTaskNameInput.value = '';
    newTaskDescription.value = '';
    newTaskAssignedTo.value = '';
    newTaskDueDate.value = '';
}

});


const tasksListId = document.querySelector("#tasksList");

tasksListId.addEventListener("click", (event) => {
if (event.target.classList.contains("done-button")) {
    const parentTask = event.target.parentElement.parentElement;
    // console.log(parentTask);
    const taskId = Number(parentTask.dataset.taskId);
    const taskCardInfo = taskManager.getTaskById(taskId);
    taskCardInfo.status = "DONE";

    taskManager.save();

    taskManager.render();
}
//check if a "delete" button was clicked
if (event.target.classList.contains('delete-button')) {
//get the parent Task 
const parentTask = event.target.parentElement.parentElement

//get the taskId of the parent Task
const taskId = Number(parentTask.dataset.taskId);

//Delete the task
taskManager.deleteTask(taskId);

//save the tasks to localStorage
taskManager.save();

//render the tasks
taskManager.render();

}

});

