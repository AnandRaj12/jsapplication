//CRUD
import {Note} from '../modular/note.js'
export const noteOperations={
    notes:[],
    add(noteObject){
    const note = new Note(noteObject);
    this.notes.push(note);
    console.log(this.notes)
    },
    searchById(id){
        return this.notes.find(note=>note.id==id);

    },
    togglemark(id){
        this.searchById(id).toggleMark();
       //const noteObject= this.searchById(id);
       //noteObject.isMarked=!noteObject.isMarked;
    },
    total(){
        return this.notes.length;
    },
    marktotal(){
        return this.notes.filter(note=>note.ismarked).length;
    },
    unmarktotal(){
        return this.total() - this.marktotal();
    },
    getNotes(){
        return this.notes
        
    },

    remove(){
        this.notes=this.notes.filter(note=>!note.ismarked)
   },
   search(){

   },
   sort(){

   },
   load(){

   }
}