const taskManager = new TaskManager();

taskManager.load();
taskManager.render();

    const newTaskForm = document.querySelector("#newTaskForm");

    const newTaskNameInput = document.getElementById('newTaskNameInput');
    const newTaskDescription = document.getElementById('newTaskDescription');
    const newTaskAssignedTo = document.getElementById('newTaskAssignedTo');
    const newTaskDueDate = document.getElementById('newTaskDueDate');
    const alert = document.querySelector('.alert');
    const tmTitle = document.getElementById("taskManagerTitle");

    tmTitle.style.display = "none";

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
                console.log("yay it works!");
            }
            if (!alert.classList.contains("hide-alert")) {
                alert.classList.add("hide-alert");
                console.log("this also works!")
            }
            console.log(`name: ${newTaskNameInput.value} description: ${newTaskDescription.value} assigned: ${newTaskAssignedTo.value} due date: ${newTaskDueDate.value}`);
            return true;
        }
    
    
    }


newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();


    // Validation code when click submit button

    let formValidation = validFormFieldInput();
    
    if(formValidation){
        
        taskManager.addTask(newTaskNameInput.value,newTaskDescription.value,newTaskAssignedTo.value,newTaskDueDate.value);
        // console.log(taskManager.tasks);
        // saves tasks to localStorage after I click submit
        taskManager.save();
        taskManager.render();
        newTaskNameInput.value = '';
        newTaskDescription.value = '';
        newTaskAssignedTo.value = '';
        newTaskDueDate.value = '';
        // if form validation is true, Task Manager text will display. If form valid. is false, Task Manager will not display since the form could not be submitted
        tmTitle.style.display = "block"
    } else if (!formValidation){
        tmTitle.style.display = "none"
    }

});


const tasksListId = document.querySelector("#tasksList");

tasksListId.addEventListener("click", (event) => {
    if (event.target.classList.contains("done-button")) {
        const parentTask = event.target.parentElement.parentElement.parentElement;
        // console.log(parentTask);
        const taskId = Number(parentTask.dataset.taskId);
        const taskCardInfo = taskManager.getTaskById(taskId);
        taskCardInfo.status = "DONE";
        // save tasks to localStorage
        taskManager.save();
        taskManager.render();
    }

    if (event.target.classList.contains("delete-button")) {
        const parentTask = event.target.parentElement.parentElement.parentElement;
        // console.log(parentTask);
        const taskId = Number(parentTask.dataset.taskId);
        taskManager.deleteTask(taskId);
        // save tasks to localStorage
        taskManager.save();
        taskManager.render();
    }

});
