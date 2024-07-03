import { NgFor } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
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
  imports: [NgFor, PaginatorComponent, PerfectScrollbarModule, MatTableModule],
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

  displayedColumns: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['metaColumns']) {
      this.displayedColumns = this.metaColumns.map((col) => col.field);
    }

    if (changes['rows']) {
      this.rows = changes['rows']['currentValue'];
    }
  }
}
