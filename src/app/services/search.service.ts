import { Injectable } from '@angular/core'
import { Observable, BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  public searchSubmit$: Observable<boolean>

  private searchSubmit$$ = new BehaviorSubject(false)

  public searchStr!: string

  public currentSearchState$!: Observable<string>

  private startSearchState$ = new BehaviorSubject<string>('')

  constructor() {
    this.searchSubmit$ = this.searchSubmit$$.asObservable()

    this.currentSearchState$ = this.startSearchState$.asObservable()
  }

  public showResults() {
    this.searchSubmit$$.next(true)
  }

  public getInputVal(str: any): void {
    this.searchStr = str
  }
}
