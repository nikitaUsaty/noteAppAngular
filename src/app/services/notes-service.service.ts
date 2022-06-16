import { Injectable } from '@angular/core'
import { NoteModel } from '../models/note-model.model'

@Injectable({
  providedIn: 'root',
})
export class NotesServiceService {
  public notes: NoteModel[] = []

  public tags: any[] = []
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

  updateNote(id: string, title: string, body: string, tag: string[]) {
    this.notes.map((el) => {
      if (el.id == id) {
        el.title = title
        el.body = body
        el.tag = tag
      }
    })

    console.log(this.notes)
  }

  addTag(tag: any) {
    this.tags.push(tag)
  }
}
