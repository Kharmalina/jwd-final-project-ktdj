

// const taskManager = new TaskManager(0);

// let id = (id) => document.getElementById(id);

// // If I want to use icons for the form validation, then I will use this below function 
// // let classes = (classes) => document.getElementsByClassName(classes);

// // let newTaskNameInput = id('newTaskNameInput'),
//     newTaskForm = id("newTaskForm"),
//     // newTaskDescription = id('newTaskDescription'),
//     // newTaskAssignedTo = id('newTaskAssignedTo'),
//     // newTaskDueDate = id('newTaskDueDate'),
//     errorMsg = document.getElementsByClassName('error');


//     let validation = (id, serial, message) => {
//         if(id.value.trim() === "") {
//             errorMsg[serial].innerHTML = message;
//             id.style.border = "2.5px solid red";
//             errorMsg[serial].style.color = "red";
//         } else {
//             errorMsg[serial].innerHTML = "";
//             id.style.border = "2.5px solid green"
//         }
//     }

// newTaskForm.addEventListener("submit", (e) => {
//     e.preventDefault();


//     let newTaskNameInput = id('newTaskNameInput'),
//     newTaskDescription = id('newTaskDescription'),
//     newTaskAssignedTo = id('newTaskAssignedTo'),
//     newTaskDueDate = id('newTaskDueDate');


//     /*
//         Validation code here
//     */

//         const name = newTaskNameInput.value;
//         const description = newTaskDescription.value;
//         const assignedTo = newTaskAssignedTo.value;
//         const dueDate = newTaskDueDate.value;
    
//         taskManager.addTask(name, description, assignedTo, dueDate);
    
//         taskManager.render();
    
//         newTaskNameInput.value = '';
//         newTaskDescription.value = '';
//         newTaskAssignedTo.value = '';
//         newTaskDueDate.value = '';


//     validation(newTaskNameInput, 0, "Task Name cannot be blank"); 
//     validation(newTaskDescription, 1, "Description cannot be blank"); 
//     validation(newTaskAssignedTo, 2, "Assignee cannot be blank"); 
//     validation(newTaskDueDate, 3, "Due Date cannot be blank"); 
//     validation(newTaskStatus, 4, "Status cannot be blank");
    

// });


// NEW ONE //




// const taskManager = new TaskManager(0);

// // let id = (id) => document.getElementById(id);

// let newTaskForm = document.querySelector("#newTaskForm");

// If I want to use icons for the form validation, then I will use this below function 
// let classes = (classes) => document.getElementsByClassName(classes);

// let newTaskNameInput = id('newTaskNameInput'),
    // newTaskForm = id("newTaskForm"),
    // newTaskDescription = id('newTaskDescription'),
    // newTaskAssignedTo = id('newTaskAssignedTo'),
    // newTaskDueDate = id('newTaskDueDate'),
    // errorMsg = document.getElementsByClassName('error');


    // let validation = (id, serial, message) => {
    //     if(id.value.trim() === "") {
    //         errorMsg[serial].innerHTML = message;
    //         id.style.border = "2.5px solid red";
    //         errorMsg[serial].style.color = "red";
    //     } else {
    //         errorMsg[serial].innerHTML = "";
    //         id.style.border = "2.5px solid green"
    //     }
    // }

// newTaskForm.addEventListener("submit", (e) => {
//     e.preventDefault();
    
//     const newTaskNameInput = document.querySelector('#newTaskNameInput');
//     const newTaskDescription = document.querySelector('#newTaskDescription');
//     const newTaskAssignedTo = document.querySelector('#newTaskAssignedTo');
//     const newTaskDueDate = document.querySelector('#newTaskDueDate');
    // errorMsg = document.getElementsByClassName('error');




    // /*
    //     Validation code here
    // */

    //     let validation = (id, serial, message) => {
    //         // errorMsg = document.getElementsByClassName('error');
    //         if(id.value.trim() === "" || id.value === null) {
    //             e.preventDefault();
    //             errorMsg[serial].innerHTML = message;
    //             id.style.border = "2.5px solid red";
    //             errorMsg[serial].style.color = "red";
    //         } else {
    //             errorMsg[serial].innerHTML = "";
    //             id.style.border = "2.5px solid green"
    //         }
    //     }

    //     validation(newTaskNameInput, 0, "Task Name cannot be blank"); 
    //     validation(newTaskDescription, 1, "Description cannot be blank"); 
    //     validation(newTaskAssignedTo, 2, "Assignee cannot be blank"); 
    //     validation(newTaskDueDate, 3, "Due Date cannot be blank"); 

//         const name = newTaskNameInput.value;
//         const description = newTaskDescription.value;
//         const assignedTo = newTaskAssignedTo.value;
//         const dueDate = newTaskDueDate.value;
    
//         taskManager.addTask(name, description, assignedTo, dueDate);
    
//         taskManager.render();
    
//         newTaskNameInput.value = '';
//         newTaskDescription.value = '';
//         newTaskAssignedTo.value = '';
//         newTaskDueDate.value = '';


// });

// errorMsg = document.getElementsByClassName('error');

// let validation = (id, serial, message) => {
//     errorMsg = document.getElementsByClassName('error');
//     if(id.value.trim() === "" || id.value === null) {
//         errorMsg[serial].innerHTML = message;
//         id.style.border = "2.5px solid red";
//         errorMsg[serial].style.color = "red";
//     } else {
//         errorMsg[serial].innerHTML = "";
//         id.style.border = "2.5px solid green"
//     }
// }




// start over brand new 

const taskManager = new TaskManager(0);

// let validForm = false;

let newTaskForm = document.getElementById("newTaskForm");

    let newTaskNameInput = document.getElementById('newTaskNameInput');
    let newTaskDescription = document.getElementById('newTaskDescription');
    let newTaskAssignedTo = document.getElementById('newTaskAssignedTo');
    let newTaskDueDate = document.getElementById('newTaskDueDate');
    let errorMsg = document.getElementsByClassName('error');


newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // const newTaskNameInput = document.getElementById('newTaskNameInput');
    // const newTaskDescription = document.getElementById('newTaskDescription');
    // const newTaskAssignedTo = document.getElementById('newTaskAssignedTo');
    // const newTaskDueDate = document.getElementById('newTaskDueDate');


        validation(newTaskNameInput, 0, "Task Name cannot be blank"); 
        validation(newTaskDescription, 1, "Description cannot be blank"); 
        validation(newTaskAssignedTo, 2, "Assignee cannot be blank"); 
        validation(newTaskDueDate, 3, "Due Date cannot be blank");

        const name = newTaskNameInput.value;
        const description = newTaskDescription.value;
        const assignedTo = newTaskAssignedTo.value;
        const dueDate = newTaskDueDate.value;

    
        taskManager.addTask(name, description, assignedTo, dueDate);
    
        taskManager.render();
    
        newTaskNameInput.value = '';
        newTaskDescription.value = '';
        newTaskAssignedTo.value = '';
        newTaskDueDate.value = '';


});


let validation = (id, serial, message) => {
        errorMsg = document.getElementsByClassName('error');
        if(id.value.trim() === "" || id.value === null) {
            errorMsg[serial].innerHTML = message;
            id.style.border = "2.5px solid red";
            errorMsg[serial].style.color = "red";
        } else {
            errorMsg[serial].innerHTML = "";
            id.style.border = "2.5px solid green"
        }
    }