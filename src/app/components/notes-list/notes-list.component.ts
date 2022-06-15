import { Component, OnInit } from '@angular/core'
import { NoteModel } from 'src/app/models/note-model.model'
import { NotesServiceService } from 'src/app/services/notes-service.service'

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
})
export class NotesListComponent implements OnInit {
  public notes!: NoteModel[]

  constructor(private noteService: NotesServiceService) {}

  ngOnInit(): void {
    this.notes = this.noteService.notes
  }
}
