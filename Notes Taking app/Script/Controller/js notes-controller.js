//controller (I/0) +Event + Talk to service
import {noteOperations} from '../services/note-service.js'
window.addEventListener('load',init)
function init(){
    showCounts();
    bindEvent();
   // disableButton();
}
const enablebutton=()=>
    document.querySelector('#delete')
    .disableButton=false;

const disableButton=()=>
    document.querySelector('#delete')
    .disable=true;





function bindEvent(){
    document.querySelector('#add').addEventListener('click',addNotes);
    document.querySelector('#delete').addEventListener('click',deleteMarked);




}
function deleteMarked(){
    noteOperations.remove();
    printNotes(noteOperations.getNotes());
}


function showCounts(){
    noteOperations.marktotal()>0
    ?enablebutton():disableButton();
    console.log(noteOperations.total())
    document.querySelector('#total').innerText
    = noteOperations.total();
    document.querySelector('#marktotal').innerText
    = noteOperations.marktotal();
    document.querySelector('#unmarktotal').innerText
    = noteOperations.unmarktotal();
}

 
function addNotes(){
    //read id, title,desc,date of completions,importance
    //Dom
    const fields= ['id','title','description','date','important']
    const noteObject={}; //object Literal
    for(let field of fields){
        noteObject[field]=document.querySelector(`#${field}`).value;
    }
    //const id= document.querySelector("#id").ariaValueMax;
        //const title= document.querySelector("#id").ariaValueMax;
    noteOperations.add(noteObject)
    printNote(noteObject);  
    showCounts(); 
}

 function printIcon(myClass='trash',fn,id){
        //<i class ="fa-solid fa-trash"></i>
        const iTag = document.createElement('i');
        iTag.setAttribute('note-id',id);
        iTag.className = `fa-solid fa-${myClass} me-2 hand`;
        iTag.addEventListener('click',fn);
        return iTag;
}
function toggleMark(){
    //console.log('Toggle Mark....',this)
    const icon = this;
    const id=this.getAttribute('note-id');
    noteOperations.togglemark(id);
    const tr = icon.parentNode.parentNode;
    //tr.className='table-danger';
    tr.classList.toggle('table-danger');
    showCounts();

}
function edit(){
    console.log('Edit...');

}
function printNotes(notes){
    const tbody=document.querySelector('#notes')
    tbody.innerHTML = '';
    notes.forEach(note=>printNote(note));
    showCounts();
}

function printNote(noteObject){
    const tbody = document.querySelector('#notes');
    const row = tbody.insertRow(); //<tr>
    for(let key in noteObject){
        if(key =='ismarked'){
            continue;
            
        }
        const td = row.insertCell();//<td>     
        td.innerText = noteObject[key];
    }
    const td = row.insertCell();
    td.appendChild(printIcon('trash',toggleMark,noteObject.id));
    td.appendChild(printIcon('user-pen',edit,noteObject.id));
}