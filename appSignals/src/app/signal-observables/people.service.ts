import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { filter, forkJoin, map, switchMap } from 'rxjs';

import { Film, People, Result } from './people';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  http = inject(HttpClient);

  private peopleObservable = this.http
    .get<People>('https://swapi.dev/api/people/')
    .pipe(map((people) => people.results));

  people = toSignal(this.peopleObservable, { initialValue: [] as Result[] });

  selectedPeople = signal<Result | undefined>(undefined);

  private peopleFilmsObservable = toObservable(this.selectedPeople).pipe(
    filter(Boolean),
    switchMap((people: Result) =>
      forkJoin(
        people.films.map((urlFilm: string) => this.http.get<Film>(urlFilm))
      )
    )
  );

  peopleFilms = toSignal(this.peopleFilmsObservable, {
    initialValue: [] as Film[],
  });

  peopleSelected(peopleName: string) {
    const peopleFound = this.people().find(
      (people) => people.name === peopleName
    );
    this.selectedPeople.set(peopleFound);
  }
}
