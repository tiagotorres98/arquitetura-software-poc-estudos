import './style.css';
import { getTaskList,addTaskListListener} from './itemListStore';
import { dispatch } from './dispatcher';
import { addTaskAction, removeTaskAction } from './actions';


document.querySelector('#app').innerHTML = `
  <h1>Lista de Tarefas</h1>
  <div>
    <input type="text" id="item_value"/>
    <button id="add_item">Adicionar Item a Lista</button>
  </div>
  <div>
  <table id="table"></table>
  </div>
`
 document.querySelector('#add_item').addEventListener("click", ()=>{
  var item = document.querySelector('#item_value').value;
  if(item == ''){
    alert("Preencha o nome da tarefa")
    return;
  }
  dispatch(addTaskAction(item));
})

function render(){
  var content = `<tr><th>Item</th><tr>\n`;
  for(let i = 0; i<getTaskList().length; i++){
    content = content + `<tr><td class="`+(i%2==0?`td--primary`:`td--secondary`)+`">`+getTaskList().at(i)+`</td></tr>\n`
  }
  document.querySelector('#table').innerHTML = content;
}

addTaskListListener(render)

render()