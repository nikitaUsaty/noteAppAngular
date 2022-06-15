import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NoteModel } from 'src/app/models/note-model.model';
import { NotesServiceService } from 'src/app/services/notes-service.service';

import * as uuid from 'uuid';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss'],
})
export class CreateNoteComponent implements OnInit {
  notes: any;
  constructor(private notesService: NotesServiceService) {}

  noteTitleForm = new FormControl('');
  noteDescriprionForm = new FormControl('');

  ngOnInit(): void {}

  addNote() {
    this.notesService.addNote({
      id: uuid.v4(),
      title: this.noteTitleForm.value,
      body: this.noteDescriprionForm.value,
    });

    this.clearFormGroup();
  }

  clearFormGroup() {
    this.noteDescriprionForm.setValue('');
    this.noteTitleForm.setValue('');
  }
}
