//ES6
export class Note{
    constructor(noteObject){
        for(let key in noteObject){
            this[key]= noteObject[key];
            
        }
        this.ismarked = false;
    }
    toggleMark(){
        this.ismarked=!this.ismarked;
    }
}
export default Note;