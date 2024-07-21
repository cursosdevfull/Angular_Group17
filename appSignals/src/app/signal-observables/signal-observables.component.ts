import { Component, computed, inject } from '@angular/core';

import { FilmsDetailComponent } from './films-detail/films-detail.component';
import { Result } from './people';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-signal-observables',
  standalone: true,
  imports: [FilmsDetailComponent],
  templateUrl: './signal-observables.component.html',
  styleUrl: './signal-observables.component.css',
})
export class SignalObservablesComponent {
  peopleService = inject(PeopleService);

  people = computed<Result[]>(() => this.peopleService.people());

  onSelectPeople(peopleName: string) {
    this.peopleService.peopleSelected(peopleName);
  }
}
