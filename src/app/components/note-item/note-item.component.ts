import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core'
import { NoteModel } from 'src/app/models/note-model.model'
import { NotesServiceService } from 'src/app/services/notes-service.service'
import { HighlightTag } from 'angular-text-input-highlight'

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NoteItemComponent implements OnInit {
  public notes!: NoteModel[]

  public isToggled: boolean = false

  public titleForUpdate!: string

  public bodyForUpdate!: string

  public tags!: any[]

  @Input() note!: NoteModel

  constructor(private noteService: NotesServiceService) {}

  ngOnInit(): void {
    this.notes = this.noteService.notes
    this.tags = this.noteService.tags
  }

  delete(note: any) {
    this.noteService.deleteNote(note)
  }

  changeToUpdate() {
    this.isToggled = true
  }

  createTagList(body: string) {
    this.tags.push(body.split(' ').filter((el) => el.startsWith('#')))
  }

  update(id: string) {
    this.tags = []
    this.noteService.updateNote(id, this.note.title, this.note.body!)
    this.createTagList(this.note.body!)
    console.log(this.tags)

    this.isToggled = false
  }

  addTags() {
    const matchHashtags = /(#\w+) ?/g
    let hashtag
    // tslint:disable-next-line
    while ((hashtag = matchHashtags.exec(this.note.body!))) {
      this.tags.push({
        indices: {
          start: hashtag.index,
          end: hashtag.index + hashtag[1].length,
        },
        cssClass: 'bg-pink',
        data: hashtag[1],
      })
    }
  }

  addDarkClass(elm: HTMLElement) {
    if (elm.classList.contains('bg-blue')) {
      elm.classList.add('bg-blue-dark')
    } else if (elm.classList.contains('bg-pink')) {
      elm.classList.add('bg-pink-dark')
    }
  }

  removeDarkClass(elm: HTMLElement) {
    elm.classList.remove('bg-blue-dark')
    elm.classList.remove('bg-pink-dark')
  }
}
