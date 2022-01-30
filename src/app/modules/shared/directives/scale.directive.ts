import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appScale]',
})
export class ScaleDirective {
  @Input('factor')
  public factor: number = 1.0;

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.transition = 'transform 100ms linear';
  }

  @HostListener('mouseenter')
  public onMouseEnter(): void {
    console.log(2);
    this.el.nativeElement.style.transform = `scale(${this.factor})`;
  }

  @HostListener('mouseleave')
  public onMouseLeave(): void {
    this.el.nativeElement.style.transform = `scale(1.0)`;
  }
}
