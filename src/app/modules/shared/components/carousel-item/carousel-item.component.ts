import { DynamicTemplateDirective } from './../../directives/dynamic-template.directive';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss'],
})
export class CarouselItemComponent implements OnInit, OnDestroy {
  @ViewChild(DynamicTemplateDirective)
  public dynamicTemplateDirective!: DynamicTemplateDirective;

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
  }
}
