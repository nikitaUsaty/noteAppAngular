import { Component, OnInit } from '@angular/core'
import { NoteModel } from 'src/app/models/note-model.model'
import { NotesServiceService } from 'src/app/services/notes-service.service'
import { SearchService } from 'src/app/services/search.service'

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
})
export class NotesListComponent implements OnInit {
  public notes!: any

  constructor(private noteService: NotesServiceService, public submitSearch: SearchService) {}

  ngOnInit(): void {
    this.notes = this.noteService.notes
  }
}
