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

  public hashtags!: any

  tags: HighlightTag[] = []

  @Input() note!: NoteModel

  constructor(private noteService: NotesServiceService) {}

  ngOnInit(): void {
    this.notes = this.noteService.notes
    this.addTags()
  }

  delete(note: string): void {
    this.noteService.deleteNote(note)
  }

  changeToUpdate(): void {
    this.isToggled = true
  }

  createTagList(body: string): void {
    this.hashtags.push([...body.split(' ').filter((el) => el.startsWith('#'))])
  }

  update(id: string) {
    this.hashtags = []
    this.createTagList(this.note.body!)
    this.noteService.updateNote(id, this.note.title, this.note.body!, this.hashtags)

    this.isToggled = false
  }

  addTags(): void {
    this.tags = []

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
}
