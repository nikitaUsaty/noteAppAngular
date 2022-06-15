import { Component, OnInit } from '@angular/core';
import { NoteModel } from 'src/app/models/note-model.model';
import { NotesServiceService } from 'src/app/services/notes-service.service';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.scss'],
})
export class NoteItemComponent implements OnInit {
  public notes!: NoteModel[];

  constructor(private noteService: NotesServiceService) {}

  ngOnInit(): void {
    this.notes = this.noteService.notes;
  }

  test() {
    console.log(this.notes);
  }

  delete(note: any) {
    this.noteService.deleteNote(note);
  }
}
