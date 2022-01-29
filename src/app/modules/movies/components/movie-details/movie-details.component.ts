import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetailsModel } from '../../models/movie-details.model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  public movie: MovieDetailsModel;

  constructor(private route: ActivatedRoute) {
    this.movie = route.snapshot.data['movie'];
  }

  ngOnInit(): void {}
}
