import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appHighlight]",
})
export class HighlightDirective {
  constructor(private _el: ElementRef) {}

  @HostListener("mouseenter") onMouseEnter() {
    this._el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener("mouseleave") onMouseLeave() {
    this._el.nativeElement.style.backgroundColor = null;
  }
}
