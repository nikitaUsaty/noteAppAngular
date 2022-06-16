import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { MainLayoutComponent } from './pages/main-layout/main-layout.component'
import { CreateNoteComponent } from './components/create-note/create-note.component'
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { NotesListComponent } from './components/notes-list/notes-list.component'
import { NoteItemComponent } from './components/note-item/note-item.component'
import { RemoveClassDirective } from './derectives/remove-class.directive'
import { FilterComponent } from './components/filter/filter.component'
import { FormsModule } from '@angular/forms'
import { TextInputHighlightModule } from 'angular-text-input-highlight';
import { TagsComponent } from './components/tags/tags.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe'

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    CreateNoteComponent,
    NotesListComponent,
    NoteItemComponent,
    RemoveClassDirective,
    FilterComponent,
    TagsComponent,
    SearchFilterPipe,
  ],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule, FormsModule, TextInputHighlightModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
