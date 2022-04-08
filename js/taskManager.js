//create the HTmL for a task
const createTaskHtml = (name, description, assignedTo, dueDate, status) =>  const htmlTask1 = `
<div class="col-12 col-md-6 col-lg-4">
   <div class="card g-4">
      <div class="card-body">
        <!--================ Task 1 =================--> 
        <p class="card-title">Task 1</p>
        <p class="card-text">${name}: Kharmalina Wireframe</p>
        <p class="card-text">${description}: Create a wireframe in Figma and share with team</p>
        <p class="card-text">${assignedTo}: Kharmalina </p>
        <p class="card-text">${dueDate}: 02/14/2022</p>
        <p class="card-text">${status}: DONE</p>
        <div class="btn-group"><a href="#" class="btn btn-primary">Edit</a></div>
        <div class="btn-group"><a href="#" class="btn btn-primary">Delete</a></div>
       </div>
    </div>
 </div>
 
 return htmlTask1;
`;


class TaskManager {
    constructor(currentId = 0){
        this.tasks = [];
        this.currentId = currentId;  
    } 
   
       

        addTask (name, description, assignedTo, dueDate){
            const task = {
            id: this.currentId++,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: 'TODO'
        };
        this.tasks.push(task);
           
        }
  
//create the render method
render() {
    //create an array to store the tasks HTML
    const tasksHtmlList = [];

    //loop over tasks and create the html, storing it in the array
    for(let i=0; i<this.tasks.length; i++) {
        //get the current task in the loop
        const task = this.tasks[i];

        //format Date
        const date = new Date(task.dueDate);
        const formattedDate = date.getDate() + '/' + (date.getMonth() +1) + '/' + date.getFullYear();
        
        //create the task html
        const taskHtml = createTaskHtml(task.name, task,desciption, task.assignedTo, formattedDate, task.status);

        //push it to the tasksHtmlList array
        tasksHtmlList.push(taskHtml);

}
    //create the tasksHtml by joining each item in the tasksHtmlList array
    tasksHtmlList.push(taskHtml);

    //set the inner html of the tasksList on the page
    const tasksList = document.querySelector('#tasksList');
    tasksList.innerHtml = tasksHtml;

}
}

