import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProgressService {
  private statusProgressBar: Subject<boolean> = new Subject<boolean>();

  constructor() {}

  getStatusProgressBar(): Observable<boolean> {
    return this.statusProgressBar.asObservable();
  }

  setStatusProgressBar(status: boolean): void {
    this.statusProgressBar.next(status);
  }
}
