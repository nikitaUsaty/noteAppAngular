import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class NotesServiceService {
  public notes: any[] = []

  constructor() {}

  addNote(note: any) {
    this.notes.push(note)
  }

  deleteNote(id: string) {
    this.notes.map((el) => {
      if (el.id == id) {
        let index = this.notes.indexOf(el)

        this.notes.splice(index, 1)
      }
    })
  }

  updateNote(id: string, title: string, body: string) {
    this.notes.map((el) => {
      if (el.id == id) {
        el.title = title
        el.body = body
      }
    })
  }
}
