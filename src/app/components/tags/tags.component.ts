import { Component, Input, OnInit } from '@angular/core'
import { NotesServiceService } from 'src/app/services/notes-service.service'

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
})
export class TagsComponent implements OnInit {
  @Input() tag!: any

  constructor(private noteService: NotesServiceService) {}

  ngOnInit(): void {
    this.tag = ''
  }
}
