import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from 'ngx-om-perfect-scrollbar';

import { TMetaColumns } from '../../interfaces/metacolumn';
import { PaginatorComponent } from '../paginator/paginator.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

@Component({
  selector: 'cdev-table',
  standalone: true,
  imports: [NgFor, PaginatorComponent, PerfectScrollbarModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
})
export class TableComponent {
  @Input('data') rows: any[] = [];

  @Input() metaColumns: TMetaColumns = [];
}
