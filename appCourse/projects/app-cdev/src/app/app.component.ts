import { Component, Inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';

import {
  IDataUser,
  IPhoto,
  MiClase,
  MiClaseProvide,
  Product,
  productToken,
} from './app.config';
import { HeaderComponent } from './core/presentation/components/dumm/header/header.component';
import { MenuComponent } from './core/presentation/components/dumm/menu/menu.component';
import { PageLoginComponent } from './core/presentation/components/smart/page-login/page-login.component';

@Component({
  selector: 'cdev-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    PageLoginComponent,
    RouterOutlet,
    MenuComponent,
    HeaderComponent,
    MatSidenavModule,
  ],
})
export class AppComponent {
  title = 'appCDev';

  constructor(
    @Inject(MiClaseProvide) miClase: MiClase,
    @Inject(MiClase) miClaseFake: MiClase,
    //@Inject(Product) product: Product,
    product: Product,
    @Inject(productToken) productToken: Product,
    @Inject('DataUser') dataUser: IDataUser,
    @Inject('UserDatabase') user: string,
    @Inject('Photos') photos: Promise<IPhoto[]>
  ) {
    console.log(miClase.saludar('Sergio'));
    console.log(miClaseFake.saludar('Sergio'));
    console.log('[AppComponent] Current date: ', miClase.getCurrentDate);
    product.addProduct(1, 'Curso de Angular', 'Curso de Angular', 100);
    console.log(product);
    productToken.addProduct(2, 'Curso de React', 'Curso de React', 100);
    console.log(productToken);
    console.log(`Nombre: ${dataUser.name}, Edad: ${dataUser.age}`);
    console.log('UserDatabase', user);

    photos.then((data) => {
      console.log('Photos', data);
    });
  }
}
