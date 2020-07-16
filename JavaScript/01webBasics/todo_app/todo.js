/**Global variables */
var li = document.getElementById('check');
var ul = document.getElementById('list');

/** Populate list all todos at every reload  */
onReload_Populate_todos()


function onReload_Populate_todos(){
    
// get all todos from localStorage
    for (const key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        //const element = localStorage[key];
        if (key.slice(0,4) == "todo") {
          Create_todo_on_the_fly( localStorage[key] );  
        }
      }
    }
  }

/** Create todo on the fly and render it */
function Create_todo_on_the_fly(item){
  
  // create li element
  let li = document.createElement('li');
          
  // create checkbox  
  let checkbox =  document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.setAttribute('id', 'check');

  // create label element and text to be inserted
  let label = document.createElement('label');
  let NewTodo = document.createTextNode(item);

  label.appendChild(NewTodo);

  li.appendChild(checkbox);
  li.appendChild(label);

  // insert at the top
  let ul = document.getElementById('list')
  let Top = ul.firstChild;
  ul.insertBefore(li, Top )
  
  // for some visual-effects
  setTimeout( ()=>{
    li.className = 'visual'     
    }, 1000 );
  }


/**Add new tasks */
function addItems(){
    document.querySelector('.myForm').addEventListener('submit', (event)=>{
        event.preventDefault();
        let item = event.target.newTodo.value;
        event.target.newTodo.value='';

        // Get list of existing tasks
        const existing_Tasks = []
        let li = ul.children
        let If_already_exist = false
        for (let index = 0; index < li.length; index++) {
            if ( item ===  li[index].children[1].textContent ) {
                If_already_exist = true;
                break;
             }
           }

         if (item === '') {
             // Avoid empty text
             return false;
             
         } else if(If_already_exist){
             // Avoid duplicate tasks
            alert(`${item} is already exist!`)
            return false
         } else{
            // first : add item to browser's local storage
            // generate unique key for new item each time
            
            let new_item_key = localStorage.length + 1; 
            localStorage.setItem( "todo " + new_item_key, item  )
            Create_todo_on_the_fly(item)  
           }         
        }, false)
    };


/** remove items */
document.getElementById('remove').onclick = function() {
    let li = ul.children
    for (let index = 0; index < li.length; index++) {
    while (li[index] && li[index].children[0].checked) {
    // first: remove from localStorage
    //console.log(li[index].textContent)
    
    const item_to_remove = li[index].textContent;
    for (const key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        if (item_to_remove == localStorage[key]) {
            localStorage.removeItem(key)        
          }
        }
      }
    ul.removeChild(li[index])}         
    }
  }

/** check all */
document.getElementById('select_all').onclick = function() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (var checkbox of checkboxes) {
      checkbox.checked = true;
      //console.log(checkbox);
    }
  }

/** un check all */  
document.getElementById('unCheck_all').onclick = function() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (var checkbox of checkboxes) {
      checkbox.checked = false;
    }
  }

/*************************************************************************************************** */
/** Old methods using EventListener */

 // function removeItems(){
    
//     document.querySelector('.removeBtn').addEventListener('submit', (event)=>{
//         event.preventDefault();
//         let li = ul.children
//         for (let index = 0; index < li.length; index++) {
//         while (li[index] && li[index].children[0].checked) {
//             ul.removeChild(li[index])}        
//           }
//         }, false)
//       };
    
       
// function selectAll(){
//     document.querySelector('.SelectAll').addEventListener('submit', (event)=>{
//     event.preventDefault();
    
//     let li = ul.children
//     for (let index = 0; index < li.length; index++) {
//         li[index].children[0].checked = true;
//         }
//     }, false)
// };


// function UnCheckAll(){
//     document.querySelector('.Uncheck_All').addEventListener('submit', (event)=>{
//     event.preventDefault();
    
//     let li = ul.children
//     for (let index = 0; index < li.length; index++) {
//         li[index].children[0].checked = false;
//         }
//     }, false)
// };


    











