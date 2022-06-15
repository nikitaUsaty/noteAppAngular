import { Component, Input, OnInit } from '@angular/core'
import { NoteModel } from 'src/app/models/note-model.model'
import { NotesServiceService } from 'src/app/services/notes-service.service'

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.scss'],
})
export class NoteItemComponent implements OnInit {
  public notes!: NoteModel[]

  public isToggled: boolean = false

  public titleForUpdate!: string

  public bodyForUpdate!: string

  @Input() note!: NoteModel

  constructor(private noteService: NotesServiceService) {}

  ngOnInit(): void {
    this.notes = this.noteService.notes
  }

  delete(note: any) {
    this.noteService.deleteNote(note)
  }

  changeToUpdate() {
    this.isToggled = true
  }

  update(id: string) {
    this.noteService.updateNote(id, this.titleForUpdate, this.bodyForUpdate)
    this.isToggled = false
  }
}
