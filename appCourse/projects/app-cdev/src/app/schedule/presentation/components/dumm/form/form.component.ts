import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'cdev-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  @Output() close = new EventEmitter<any | null | undefined>();
  @ViewChild("modal_content") modal_content!: ElementRef

  closeModal() {
    this.close.emit();
  }

  onSave(formData?: any) {
    this.close.emit(formData);
  }

  set addClass(className: string) {
    this.modal_content.nativeElement.classList.add(className);
  }
}
