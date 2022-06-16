import { Component, OnInit } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { SearchService } from 'src/app/services/search.service'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  searchForm: any

  public isSubmitted: boolean = false

  public headSearchStr: string = ''

  constructor(public submitSearchService: SearchService) {}

  ngOnInit(): void {}

  public searchSubmit(): void {
    this.submitSearchService.getInputVal(this.headSearchStr)
    this.submitSearchService.showResults()
  }
}
