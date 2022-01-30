import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynamicTemplate]',
})
export class DynamicTemplateDirective {
  constructor(
    public templateRef: TemplateRef<any>,
    public viewContainerRef: ViewContainerRef
  ) {}
}
