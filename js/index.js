

//const newTask = new TaskManager();// step 2.1.b
// console.log(newTask.currentId);              //step 2.2.b


//Testing the addTask() in our taskManager.js file
// const newTask2 = new TaskManager(this.currentId);
// newTask2.addTask(
// 		"mop",
//     "Prepare a healthy serving of pancakes for the family tonight",
//     "Davis",
//     "04/07/2022"
// 	)

//   console.log(newTask2)

//=======Step 4: Adding Tasks With The Form =======
const newTask = new TaskManager(); //Intitalization of New Task

//This is targeting the sunmit button 
//Add an id = "submitBtn"
let submitBtn = document.getElementById("submitBtn");
let form2 = document.getElementById("form2");


submitBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "green";
});

form2.addEventListener("click", () => {
  form2.style.backgroundColor = "green";
});

