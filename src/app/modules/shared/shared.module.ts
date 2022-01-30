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

@NgModule({
  declarations: [SeparatorPipe, SummaryPipe, ScaleDirective, ShufflePipe],
  imports: [
    // Common
    CommonModule,

    // Forms
    FormsModule,
    ReactiveFormsModule,

    // Angular Material UI
    MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatGridListModule,
    MatSnackBarModule,
    MatDividerModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatChipsModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
  ],
  exports: [
    // Common
    CommonModule,

    // Custom Components
    ScaleDirective,
    SeparatorPipe,
    SummaryPipe,
    ShufflePipe,

    // Forms
    FormsModule,
    ReactiveFormsModule,

    // Angular Material UI
    MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatGridListModule,
    MatSnackBarModule,
    MatDividerModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatChipsModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
  ],
})
export class SharedModule {}
