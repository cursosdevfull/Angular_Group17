import { NgFor } from '@angular/common';
import {
  Component,
  ContentChildren,
  ElementRef,
  Input,
  QueryList,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
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
  encapsulation: ViewEncapsulation.None,
})
export class TableComponent {
  @Input('data') rows: any[] = [];
  @Input() metaColumns: TMetaColumns = [];
  @ContentChildren('newColumn')
  divs!: QueryList<ElementRef>;
  @ViewChild('header') header!: ElementRef;
  @ViewChild('body') body!: ElementRef;

  ngAfterContentChecked() {
    if (!this.divs || !this.header || !this.body) return;

    this.divs.forEach((div) => {
      const th = document.createElement('th');
      th.innerHTML =
        div.nativeElement.title !== 'actions' ? div.nativeElement.title : '';
      th.setAttribute('class', 'tr__th tr__th--sticky');

      this.header.nativeElement.appendChild(th);
      const trBody = this.body.nativeElement.querySelectorAll('tr');
      trBody.forEach((tr: any) => {
        const td = document.createElement('td');
        td.setAttribute('class', 'tr__th tr__th--row tr__th--right');
        td.innerHTML = div.nativeElement.innerHTML;
        tr.appendChild(td);
      });

      div.nativeElement.remove();
    });
  }
}
