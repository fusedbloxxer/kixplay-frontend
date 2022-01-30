import { ProviderSourceComponent } from './../provider-source/provider-source.component';
import { Component, Input, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ProviderModel } from '../../models/provider.model';

@Component({
  selector: 'app-movie-provider',
  templateUrl: './movie-provider.component.html',
  styleUrls: ['./movie-provider.component.scss'],
})
export class MovieProviderComponent implements OnInit {
  @Input('provider')
  public provider!: ProviderModel;

  constructor(private bottomSheet: MatBottomSheet) {}

  ngOnInit(): void {}

  public showSources(): void {
    this.bottomSheet.open(ProviderSourceComponent, {
      data: { sources: this.provider.sources },
    });
  }
}
