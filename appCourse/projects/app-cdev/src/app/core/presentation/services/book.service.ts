import { Injectable } from '@angular/core';

import { LogService } from './log.service';

export interface IBook {
  id: number;
  title: string;
  description: string;
  duration: number;
  price: number;
}

@Injectable()
export class BookService {
  private readonly books = [
    {
      id: 1,
      title: 'Angular',
      description: 'Curso de Angular',
      duration: 40,
      price: 100,
    },
    {
      id: 2,
      title: 'React',
      description: 'Curso de React',
      duration: 40,
      price: 100,
    },
    {
      id: 3,
      title: 'Vue',
      description: 'Curso de Vue',
      duration: 40,
      price: 100,
    },
    {
      id: 4,
      title: 'Svelte',
      description: 'Curso de Svelte',
      duration: 40,
      price: 100,
    },
    {
      id: 5,
      title: 'Angular',
      description: 'Curso de Angular',
      duration: 40,
      price: 100,
    },
    {
      id: 6,
      title: 'React',
      description: 'Curso de React',
      duration: 40,
      price: 100,
    },
    {
      id: 7,
      title: 'Vue',
      description: 'Curso de Vue',
      duration: 40,
      price: 100,
    },
    {
      id: 8,
      title: 'Svelte',
      description: 'Curso de Svelte',
      duration: 40,
      price: 100,
    },
    {
      id: 9,
      title: 'Angular',
      description: 'Curso de Angular',
      duration: 40,
      price: 100,
    },
    {
      id: 10,
      title: 'React',
      description: 'Curso de React',
      duration: 40,
      price: 100,
    },
    {
      id: 11,
      title: 'Vue',
      description: 'Curso de Vue',
      duration: 40,
      price: 100,
    },
    {
      id: 12,
      title: 'Svelte',
      description: 'Curso de Svelte',
      duration: 40,
      price: 100,
    },
  ];

  constructor(private logService: LogService) {}

  get getBooks(): IBook[] {
    return [...this.books];
  }
}
