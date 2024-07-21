import { Component, inject } from '@angular/core';

import { PeopleService } from '../people.service';

@Component({
  selector: 'app-films-detail',
  standalone: true,
  imports: [],
  templateUrl: './films-detail.component.html',
  styleUrl: './films-detail.component.css',
})
export class FilmsDetailComponent {
  peopleService = inject(PeopleService);

  films = this.peopleService.peopleFilms;
}
