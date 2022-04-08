class TaskManager {   //step 2.1.a
  // Set up the tasks and currentId property in the contructor
  constructor(currentId = 0) {
    this.currentId = currentId;
    this.tasks = [];  //step 2.2.a
  }

  // step 2.1.b / step 2.2.b (in index.js)

  //step 3 - 
  // Create the addTask method to 
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
      status: 'TODO'   //default status
    };

    this.tasks.push(task); //step 3.5 (this is what it is pushed to array above)
  }
}


