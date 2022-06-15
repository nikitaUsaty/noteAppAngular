import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotesServiceService {
  public notes: any[] = [];

  constructor() {}

  addNote(note: any) {
    this.notes.push(note);
    console.log(this.notes);
  }

  deleteNote(id: any) {
    this.notes.map((el) => {
      if (el.id == id) {
        let index = this.notes.indexOf(el[id]);
        this.notes.splice(index, 1);
      }
    });
  }

  yoyo() {}
}
