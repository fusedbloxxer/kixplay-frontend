import {
  AfterViewInit,
  Component,
  ContentChildren,
  EmbeddedViewRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChild,
} from '@angular/core';
import { DynamicViewDirective } from '../../directives/dynamic-view.directive';
import { CarouselItemComponent } from '../carousel-item/carousel-item.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit, AfterViewInit {
  private lastView!: EmbeddedViewRef<any>;
  private itemIndex: number = 0;

  @Input('width')
  public width!: number;

  @Input('height')
  public height!: number;

  @Input('hasControls')
  public hasControls: boolean = true;

  @ViewChild(DynamicViewDirective)
  public dynamicViewDirective!: DynamicViewDirective;

  @ContentChildren(CarouselItemComponent)
  public carouselItems!: QueryList<CarouselItemComponent>;

  @Output('onItemChanged')
  public onItemChanged: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (!this.carouselItems.length) {
      return;
    }

    this.lastView =
      this.dynamicViewDirective.viewContainerRef.createEmbeddedView(
        this.carouselItems.first.dynamicTemplateDirective.templateRef
      );
  }

  public onNext(): void {
    if (!this.carouselItems.length) {
      return;
    }
    this.loadEmbeddedView(+1);
  }

  public onPrev(): void {
    if (!this.carouselItems.length) {
      return;
    }
    this.loadEmbeddedView(-1);
  }

  private loadEmbeddedView(step: number): void {
    // Dispose of the previous views
    this.lastView?.destroy();
    this.dynamicViewDirective.viewContainerRef.clear();
    this.dynamicViewDirective.viewContainerRef.detach();

    // Get the next index according to the step
    this.itemIndex = this.next(
      this.itemIndex + step,
      this.carouselItems.length
    );

    // Fetch the carousel item
    const item = this.carouselItems.get(this.itemIndex);

    // Check for existance
    if (!item) {
      return;
    }

    // Retrieve item's the template
    const template = item.dynamicTemplateDirective.templateRef;

    // Create a new view
    this.lastView =
      this.dynamicViewDirective.viewContainerRef.createEmbeddedView(template);

    // Notify others about the change
    this.onItemChanged.emit();
  }

  private next(index: number, size: number): number {
    return index < 0 ? size + index : index % size;
  }
}
