import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  async getComments() {
    return fetch('https://jsonplaceholder.typicode.com/comments').then(
      (response) => response.json()
    );
  }
}
