import { Pipe, PipeTransform } from '@angular/core'
import { NoteModel } from '../models/note-model.model'

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(notes: any[], value: string = ''): NoteModel[] {
    if (!notes || !value) return notes
    return notes.filter((el) => el.body.toLocaleUpperCase().includes('#' + value.toLocaleUpperCase()))
  }
}
