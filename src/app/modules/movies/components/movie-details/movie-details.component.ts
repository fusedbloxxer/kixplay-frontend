import {
  Component,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { LoadComponent } from 'src/app/modules/shared/components/load/load.component';
import { RoleModel } from 'src/app/modules/users/models/role.model';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { MovieDetailsModel } from '../../models/movie-details.model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  public canSeeSources$: Observable<boolean>;

  @Input('movie')
  public movie: MovieDetailsModel;

  constructor(
    private route: ActivatedRoute,
    public authorizationService: AuthorizationService
  ) {
    this.movie = route.snapshot.data['movie'];

    if (!this.movie.providers.length) {
      this.canSeeSources$ = of(false);
    } else {
      this.canSeeSources$ = authorizationService.hasRole(RoleModel.Contributor);
    }
  }

  ngOnInit(): void {}
}
