import { Directive, ElementRef, Input, Renderer2 } from '@angular/core'

@Directive({
  selector: '[appRemoveClass]',
})
export class RemoveClassDirective {
  @Input('changeClass') changeClass!: string

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnInit() {
    this.removeClass(this.changeClass)
  }

  removeClass(className: string) {
    setTimeout(() => {
      this.renderer.removeClass(this.elementRef.nativeElement, className)
    }, 1000)
  }
}
