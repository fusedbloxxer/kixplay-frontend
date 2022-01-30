import { Component, Inject, OnInit } from '@angular/core';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-provider-source',
  templateUrl: './provider-source.component.html',
  styleUrls: ['./provider-source.component.scss'],
})
export class ProviderSourceComponent implements OnInit {
  private hasFocus: boolean = false;
  public sources: string[];

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: { sources: string[] },
    private bottomSheetRef: MatBottomSheetRef<ProviderSourceComponent>
  ) {
    this.sources = data.sources;
  }

  ngOnInit(): void {}

  public onMouseEnter(): void {
    this.hasFocus = true;
  }

  public onMouseLeave(): void {
    if (this.hasFocus) {
      this.bottomSheetRef.dismiss();
    }
  }

  public onClick(event: MouseEvent, sourceUrl: string): void {
    window.open(sourceUrl, '_blank');
    this.bottomSheetRef.dismiss();
    event.preventDefault();
    this.hasFocus = false;
  }
}
