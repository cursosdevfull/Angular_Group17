import { NgForOf } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal-simple',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './signal-simple.component.html',
  styleUrl: './signal-simple.component.css',
})
export class SignalSimpleComponent {
  quantityCars = signal<number>(1);
  quantityAvailables = signal<Array<number>>([1, 2, 3, 4, 5]);

  carInformation = signal({
    id: 1,
    brand: 'Kia',
    model: 'Sorento',
    year: 2024,
    price: 45000,
    priceWithTax: 0,
  });

  //quantityTotal = computed(() => this.quantityCars());
  totalPrice = computed(
    () => this.carInformation().priceWithTax * this.quantityCars()
  );

  totalColor = computed(() =>
    this.totalPrice() < 100000
      ? 'red'
      : this.totalPrice() < 200000
      ? 'blue'
      : 'green'
  );

  constructor() {
    const tax = 0.16;
    this.carInformation.update((currentValue: any) => ({
      ...currentValue,
      priceWithTax: currentValue.price + currentValue.price * tax,
    }));
    //effect(() => console.log('quantityCars', this.quantityCars()));
    // document.addEventListener('click', () => {});
    //fromEvent(document, 'click').subscribe(() => {
    //this.quantityCars.set(this.quantityCars() + 10);
    //this.quantityCars.update((currentValue: number) => currentValue + 10);
    //});
  }

  onSelectQuantity(value: number) {
    this.quantityCars.set(value);
  }
}
