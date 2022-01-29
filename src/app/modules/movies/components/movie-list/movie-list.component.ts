import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetailsModel } from '../../models/movie-details.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  public movies: MovieDetailsModel[];

  constructor(private route: ActivatedRoute) {
    this.movies = route.snapshot.data['movies'];
  }

  ngOnInit(): void {}
}
