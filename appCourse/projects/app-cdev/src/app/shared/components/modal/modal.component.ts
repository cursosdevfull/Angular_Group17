import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  standalone: true,
})
export class FormularioComponent {
  @Output() save = new EventEmitter<any>(); // Ajustar según el tipo de datos

  formData = {
    course: 'Solid',
    date: '2021-10-10',
    hour: '10:00',
  }; // Ajustar según el tipo de datos

  onSave() {
    this.save.emit(this.formData);
  }
}

@Component({
  selector: 'cdev-modal',
  standalone: true,
  imports: [NgIf, FormularioComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<any>();

  isVisible = true;

  openModal() {
    this.isVisible = true;
  }

  closeModal() {
    this.isVisible = false;
    this.close.emit();
  }

  onSave(formData?: any) {
    // Ajustar según el tipo de datos del formulario
    this.isVisible = false;
    this.save.emit(formData);
  }
}
