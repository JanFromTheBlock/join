let tasks = [
  {
    "title": "Website redesign",
    "description": "Modify the contents of the main website ...",
    "category": "Design",
    "progress": "1",
    "subtasks": 2,
    "done-tasks": 0,
  },
  {
    "title": "Call potential clients",
    "description": "Make the product presentation to prospective buyers",
    "category": "Sales",
    "progress": "2",
    "subtasks": 0,
    "done-tasks": 0,
  },
  {
    "title": "Video cut",
    "description": "Edit the new company video",
    "category": "Media",
    "progress": "3",
    "subtasks": 0,
    "done-tasks": 0,
  },
  {
    "title": "Social media strategy",
    "description": "Develop an ad campaign for brand positioning",
    "category": "Marketing",
    "progress": "4",
    "subtasks": 3,
    "done-tasks": 3,
  }
];



function addTaskRender(i) {
  docID("addTask").innerHTML = /*html*/ `
    <div class="add-task">
        <form>
          <input id="inputFieldTitle" required class="add-task-title cursor-pointer" placeholder="Enter a title" type="text">
          <input onclick ="showContactList()" placeholder="Selected contacts to assign" class="add-task-select-contact cursor-pointer" id="selectContact">
          <div id="showContacts" class="d-none add-task-choose-contacts">
              <span onclick="chooseContact()" class="add-task-single-contact">You <img id="chooseBoxContact${i}" src="./assets/img/logoChooseContact.png"></span>
              <span onclick="chooseContact()" class="add-task-single-contact">Test <img id="chooseBoxContact${i}" src="./assets/img/logoChooseContact.png"></span>
              <span onclick="addContact()" class="add-task-single-contact">Invite new contact <img src="./assets/img/logoContactBlue.png"></span>
          </div>
        
        </form>

        <form>
          <div class="add-task-due-date">
             <h2>Due Date</h2>
             <input id="inputDate" class="add-task-due-date-input cursor-pointer cursor-pointer" id="dueDate" type="date">
          </div>
        </form>

        <form>
            <div class="add-task-due-date">
               <h2>Category</h2>
               <input onclick="showCategories()" required class="add-task-select-contact cursor-pointer" id="selectCategory" placeholder="Select Task category">
                 <div id="showCategories" class="add-task-choose-priority d-none">
                   <span class="add-task-single-priority">Sales</span>
                   <span class="add-task-single-priority">Backoffice</span>
                   <span class="add-task-single-priority">New category</span>
                 </div>
              
            </div>
        </form>
          <div class="add-task-priority">
            <button id="urgent" onclick="changeColor('urgent')" class="add-task-button-priority cursor-pointer">Urgent <img id="urgentLogo" src="./assets/img/urgentLogo.png"></button>
            <button id="medium" onclick="changeColor('medium')" class="add-task-button-priority cursor-pointer">Medium <img id="mediumLogo" src="./assets/img/mediumLogo.png"></button>
            <button id="low" onclick="changeColor('low')" class="add-task-button-priority cursor-pointer">Low <img id="lowLogo" src="./assets/img/lowLogo.png"></button>
          </div>
       <form>
        <div class="add-task-description">
          <h2>Description</h2>
          <textarea required id="description" placeholder="Enter a Description" class="add-task-textarea cursor-pointer"></textarea>
        </div>
        </form>
        
        <div class="subtask">
          <div>
              <h2>Subtasks</h2>
             <div>
                <input id="inputSubtask" required class="add-task-subtask cursor-pointer" placeholder="Add new subtask" type="text">
                <img onclick="showSubtasks()" class="add-task-plus-button cursor-pointer" src="./assets/img/subtaskPlus.png">
              </div>

                <div id="subTaskArea" class="d-none"></div>
             </div>

           <div class="add-task-button">
            <button onclick="clearTask()" class="add-task-button-clear cursor-pointer">Clear<img src="./assets/img/xClear.png"></button>  
            <button onclick="newTask()" class="add-task-button-create cursor-pointer">Add Task<img src="./assets/img/hakenCreateTask.png"></button>
          </div>

        </div>
    </div>
    `;
}

function showSubtasks() {
  let subtaskArea = document.getElementById(`subTaskArea`);
  let inputSubtask = document.getElementById(`inputSubtask`).value;

  document.getElementById(`inputSubtask`).value = ``;

  subtaskArea.classList.remove(`d-none`);

  subtaskArea.innerHTML += `
  <div class="subTaskArea">
  <input class="cursor-pointer" type="checkbox">
  <label for="subtask1">${inputSubtask}</label>
  </div>
  `;
}

function changeColor(i) {
  let urgent = document.getElementById("urgent");
  let medium = document.getElementById("medium");
  let low = document.getElementById("low");

  if (i === "urgent") {
    urgent.classList.add("change-color-urgent");
    urgent.classList.add("clicked");
    medium.classList.remove("change-color-medium");
    medium.classList.remove("clicked");
    low.classList.remove("clicked");
    low.classList.remove("change-color-low");
    urgentLogo.src = `./assets/img/urgentLogoWhite.png`;
    lowLogo.src = `./assets/img/lowLogo.png`;
    mediumLogo.src = `./assets/img/mediumLogo.png`;
  } else if (i === "medium") {
    urgent.classList.remove("change-color-urgent");
    medium.classList.add("clicked");
    low.classList.remove("clicked");
    urgent.classList.remove("clicked");
    medium.classList.add("change-color-medium");
    low.classList.remove("change-color-low");
    lowLogo.src = `./assets/img/lowLogo.png`;
    urgentLogo.src = `./assets/img/urgentLogo.png`;
    mediumLogo.src = `./assets/img/mediumLogoWhite.png`;
  } else if (i === "low") {
    urgent.classList.remove("change-color-urgent");
    medium.classList.remove("change-color-medium");
    low.classList.add("change-color-low");
    medium.classList.remove("clicked");
    urgent.classList.remove("clicked");
    low.classList.add("clicked");
    lowLogo.src = `./assets/img/lowLogoWhite.png`;
    urgentLogo.src = `./assets/img/urgentLogo.png`;
    mediumLogo.src = `./assets/img/mediumLogo.png`;
  }
}

function newTask() {
  let title = document.getElementById(`inputFieldTitle`).value;
  let date = document.getElementById(`inputDate`).value;
  let category = document.getElementById(`selectCategory`).value;
  let description = document.getElementById(`description`).value;

  document.getElementById(`inputFieldTitle`).value = ``;
  document.getElementById(`description`).value = ``;

  let task = {
    title: title,
    description: description,
    category: category,
  };

  tasks.push(task);
  console.log(tasks);
 

  // zu TestZwecke

  let content = document.getElementById(`content`);

  content.innerHTML += `
  <div id="task">
  <div id="task-category">${category}</div>
  <div id="task-title">${title}</div>
  <div id="task-description">${description}</div>
  <div id="task-footer">
      <div id="contact-area">
          <span class="contacts">SM</span>
          <span class="contacts">MV</span>
          <span class="contacts">EF</span>
      </div>
      <img id="contact-area-img" src="./assets/img/lowLogo.png">
  </div>
  
</div>
  `;
  }



function clearTask(i) {
  tasks.splice(i, 1);

  console.log(tasks);
 
}

let clicked = false;

function showContactList(){
let showContacts = document.getElementById(`showContacts`);

if(clicked){
showContacts.classList.add(`d-none`);
clicked = false;
}else{
  showContacts.classList.remove(`d-none`);
  clicked = true;
}
}

function showCategories(){
  let showCategories = document.getElementById(`showCategories`);

if(clicked){
showCategories.classList.add(`d-none`);
clicked = false;
}else{
  showCategories.classList.remove(`d-none`);
  clicked = true;
}
}


function chooseContact(i){
let chooseBoxContact = document.getElementById(`chooseBoxContact${i}`);
chooseBoxContact.src="./assets/img/checkButtonContact.png"
}

function addContact(){
  showContacts.classList.add(`d-none`);
  selectContact.placeholder = "Contact email";
}