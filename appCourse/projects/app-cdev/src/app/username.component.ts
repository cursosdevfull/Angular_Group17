import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'miselector',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css'],
  imports: [NgForOf, FormsModule],
  standalone: true,
})
export class UsernameComponent {
  name = 'John';
  lastname = 'Doe';
  date = new Date();

  users = [
    { name: 'John', lastname: 'Doe' },
    { name: 'Jane', lastname: 'Doe' },
  ];

  paramName = 'Alicia';
  paramLastname = 'Aguirre';

  constructor() {
    setInterval(() => {
      this.date = new Date();
    }, 2000);
  }

  getFullName() {
    return this.toUpper(this.name + ' ' + this.lastname);
  }

  toUpper(value: string) {
    return value.toUpperCase();
  }

  captureName(event: any) {
    this.paramName = event.target.value;
  }

  captureLastname(event: any) {
    this.paramLastname = event.target.value;
  }

  save() {
    this.users.push({ name: this.paramName, lastname: this.paramLastname });

    this.users = this.users
      .sort((a, b) => {
        return a.lastname > b.lastname ? 1 : -1;
      })
      .filter((user) => user.lastname.length > 3);

    this.paramName = '';
    this.paramLastname = '';
  }
}
