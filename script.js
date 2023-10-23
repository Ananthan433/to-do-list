const todoList = [{
      name:'Make dinner',
      dueDate:'2022-12-22'
}, {
      name:'Wash dishes',
      dueDate:'2022-12-22'
}];

renderTodoList();

function addTodo() {
   const inputElement = document.querySelector('.js-name-input');
   const name = inputElement.value;

   const dateInputElemet = document.querySelector('.js-due-date-input');
   const dueDate = dateInputElemet.value;

   todoList.push(
      {
         name,
         dueDate
      }
   );

   inputElement.value = '';
   renderTodoList();
}

function renderTodoList()
{
   let todoHTML = '';

for(let i = 0; i < todoList.length; i++)
{
   const todoObject = todoList[i];
   // const name = todoObject.name;
   // const dueDate = todoObject.dueDate;
   const {name,dueDate} = todoObject;
   const html = `
   <div>${name}</div>
   <div>${dueDate}</div>
   <button onclick = "todoList.splice(${i},1);
   renderTodoList();
   "
   class="delete-todo-btn">Delete
   </button>
   `;
   todoHTML += html;
}

document.querySelector('.js-todo-list').innerHTML = todoHTML;


}
