import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { SeparatorPipe } from './pipes/separator.pipe';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { SummaryPipe } from './pipes/summary.pipe';
import { ScaleDirective } from './directives/scale.directive';
import { MatChipsModule } from '@angular/material/chips';
import { ShufflePipe } from './pipes/shuffle.pipe';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SafePipe } from './pipes/safe.pipe';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselItemComponent } from './components/carousel-item/carousel-item.component';
import { DynamicTemplateDirective } from './directives/dynamic-template.directive';
import { DynamicViewDirective } from './directives/dynamic-view.directive';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadComponent } from './components/load/load.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    SeparatorPipe,
    SummaryPipe,
    ScaleDirective,
    ShufflePipe,
    SafePipe,
    CarouselComponent,
    CarouselItemComponent,
    DynamicTemplateDirective,
    DynamicViewDirective,
    LoadComponent,
  ],
  imports: [
    // Common
    CommonModule,

    // Forms
    FormsModule,
    ReactiveFormsModule,

    // Angular Material UI
    MatProgressSpinnerModule,
    MatBottomSheetModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatSnackBarModule,
    MatDividerModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatChipsModule,
    MatCardModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
  ],
  exports: [
    // Common
    CommonModule,

    // Custom Components
    CarouselItemComponent,
    DynamicViewDirective,
    CarouselComponent,
    ScaleDirective,
    LoadComponent,
    SeparatorPipe,
    SummaryPipe,
    ShufflePipe,
    SafePipe,

    // Forms
    FormsModule,
    ReactiveFormsModule,

    // Angular Material UI
    MatProgressSpinnerModule,
    MatBottomSheetModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatGridListModule,
    MatSnackBarModule,
    MatDividerModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatChipsModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
  ],
})
export class SharedModule {}
