import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  MatPaginatorIntl,
  MatPaginatorModule,
  PageEvent,
} from '@angular/material/paginator';

import env from '../../../../assets/environment/env.json';
import { Paginator } from '../../../core/presentation/providers/paginator';

@Component({
  selector: 'cdev-paginator',
  standalone: true,
  imports: [MatPaginatorModule],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css',
  providers: [{ provide: MatPaginatorIntl, useClass: Paginator }],
})
export class PaginatorComponent {
  @Input() totalItems: number = 0;
  @Output() page: EventEmitter<number> = new EventEmitter();
  pageSize: number = env.pageSize;

  changePage(event: PageEvent) {
    this.page.emit(event.pageIndex + 1);
  }
}
