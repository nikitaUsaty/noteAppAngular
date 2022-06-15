import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

import { NotesServiceService } from 'src/app/services/notes-service.service'

import * as uuid from 'uuid'

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss'],
})
export class CreateNoteComponent implements OnInit {
  notes: any
  constructor(private notesService: NotesServiceService) {}

  noteTitleForm = new FormControl('', [Validators.required])
  noteDescriprionForm = new FormControl('')
  ngOnInit(): void {}

  addNote() {
    if (!this.noteTitleForm.valid) return
    this.notesService.addNote({
      id: uuid.v4(),
      title: this.noteTitleForm.value,
      body: this.noteDescriprionForm.value,
    })

    this.clearFormGroup()
  }

  clearFormGroup() {
    this.noteDescriprionForm.setValue('')
    this.noteTitleForm.setValue('')
  }

  public getColorClass(row: any = ''): string {
    return 'alert'
  }
}
