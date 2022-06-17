import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core'
import { HighlightTag } from 'angular-text-input-highlight'
import { NotesServiceService } from 'src/app/services/notes-service.service'

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TagsComponent {
  constructor() {}

  text = 'this is some text'

  tags: HighlightTag[] = []
  addTags() {
    const matchHashtags = /(#\w+) ?/g
    let hashtag
    // tslint:disable-next-line
    while ((hashtag = matchHashtags.exec(this.text!))) {
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
