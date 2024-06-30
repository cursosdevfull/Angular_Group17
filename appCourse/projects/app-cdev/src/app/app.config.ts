import { ApplicationConfig, InjectionToken } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BookService } from './core/presentation/services/book.service';
import { LogService } from './core/presentation/services/log.service';

export class MiClase {
  private currentDate = new Date();
  constructor() {
    console.log('Ejecución del constructor: MiClase');
  }

  saludar(nombre: string) {
    return `Hola ${nombre}`;
  }

  get getCurrentDate() {
    return this.currentDate.toISOString();
  }
}

export class MiClaseProvide {}

export class FakeMiClase {
  saludar(nombre: string) {
    return `Hola ${nombre}`.toUpperCase();
  }

  get getCurrentDate() {
    return new Date().getTime();
  }
}

export class Product {
  id!: number;
  title!: string;
  description!: string;
  price!: number;

  constructor() {}

  addProduct(id: number, title: string, description: string, price: number) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
  }
}

export interface IDataUser {
  name: string;
  age: number;
}

export interface IConnectionData {
  user: string;
  url: string;
}

export interface IPhoto {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export const productToken = new InjectionToken('Token de producto');

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    { provide: 'ProvideMiClase', useClass: MiClase },
    { provide: MiClaseProvide, useClass: MiClase },
    { provide: MiClase, useClass: FakeMiClase },
    //{ provide: Product, useClass: Product },
    Product,
    { provide: productToken, useClass: Product },
    { provide: 'DataUser', useValue: { name: 'Sergio', age: 30 } },
    { provide: 'UserDatabase', useValue: 'user_database' },
    {
      provide: 'connectionData',
      useFactory: async (): Promise<IConnectionData> => {
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve(true);
          }, 3000);
        });

        return { user: 'user', url: 'http://localhost:3000' };
      },
    },
    {
      provide: 'Photos',
      useFactory: async (): Promise<IPhoto[]> => {
        return await fetch('https://jsonplaceholder.typicode.com/photos').then(
          (response) => response.json()
        );
      },
    },
    {
      provide: 'ConnectionString',
      useValue: 'mongodb://localhost:27017',
    },
    {
      provide: 'UsersGetAll',
      useFactory: (connectionString: string) => {
        return connectionString;
      },
      deps: ['ConnectionString'],
    },
    BookService,
    { provide: 'LibroService', useExisting: BookService },
    LogService,
    /*     { provide: ServiceA, useClass: ServiceA },
    { provide: ServiceB, useExisting: forwardRef(() => ServiceA) }, */
  ],
};
