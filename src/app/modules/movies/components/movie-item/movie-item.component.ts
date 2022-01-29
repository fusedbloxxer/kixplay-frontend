import { Component, Input, OnInit } from '@angular/core';
import { MovieDetailsModel } from '../../models/movie-details.model';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent implements OnInit {
  @Input('movie')
  public movie!: MovieDetailsModel;

  constructor() {}

  ngOnInit(): void {}
}
