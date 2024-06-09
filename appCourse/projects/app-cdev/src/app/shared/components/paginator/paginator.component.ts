import { Component, EventEmitter, Input, Output } from '@angular/core';

import env from '../../../../assets/environment/env.json';

@Component({
  selector: 'cdev-paginator',
  standalone: true,
  imports: [],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css',
})
export class PaginatorComponent {
  @Input() totalItems!: number;
  @Input() currentPage!: number;
  @Output() page: EventEmitter<number> = new EventEmitter();
  pageSize: number = env.pageSize;

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.pageSize);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  get firstItem(): number {
    return (this.currentPage - 1) * this.pageSize + 1;
  }

  get lastItem(): number {
    return Math.min(this.currentPage * this.pageSize, this.totalItems);
  }

  get disabledPrevious(): boolean {
    return this.currentPage === 1;
  }

  get disabledNext(): boolean {
    return this.currentPage === this.totalPages;
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.page.emit(this.currentPage - 1);
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.page.emit(this.currentPage + 1);
    }
  }

  goFirstPage() {
    this.page.emit(1);
  }

  goLastPage() {
    this.page.emit(this.totalPages);
  }
}
