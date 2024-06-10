import { Component } from '@angular/core';

import env from '../../../../../../assets/environment/env.json';
import { ContainerComponent } from '../../../../../shared/components/container/container.component';
import { PaginatorComponent } from '../../../../../shared/components/paginator/paginator.component';
import { TableComponent } from '../../../../../shared/components/table/table.component';
import { TitleComponent } from '../../../../../shared/components/title/title.component';
import { TMetaColumns } from '../../../../../shared/interfaces/metacolumn';

@Component({
  selector: 'cdev-page-user',
  standalone: true,
  imports: [
    ContainerComponent,
    TitleComponent,
    TableComponent,
    PaginatorComponent,
  ],
  templateUrl: './page-user.component.html',
  styleUrl: './page-user.component.css',
})
export class PageUserComponent {
  dataOriginal = [
    { id: 1, name: 'name01', lastname: 'lastname01' },
    { id: 2, name: 'name02', lastname: 'lastname02' },
    { id: 3, name: 'name03', lastname: 'lastname03' },
    { id: 4, name: 'name04', lastname: 'lastname04' },
    { id: 5, name: 'name05', lastname: 'lastname05' },
    { id: 6, name: 'name06', lastname: 'lastname06' },
    { id: 7, name: 'name07', lastname: 'lastname07' },
    { id: 8, name: 'name08', lastname: 'lastname08' },
    { id: 9, name: 'name09', lastname: 'lastname09' },
    { id: 10, name: 'name10', lastname: 'lastname10' },
    { id: 11, name: 'name11', lastname: 'lastname11' },
    { id: 12, name: 'name12', lastname: 'lastname12' },
    { id: 13, name: 'name13', lastname: 'lastname13' },
    { id: 14, name: 'name14', lastname: 'lastname14' },
    { id: 15, name: 'name15', lastname: 'lastname15' },
    { id: 16, name: 'name16', lastname: 'lastname16' },
    { id: 17, name: 'name17', lastname: 'lastname17' },
    { id: 18, name: 'name18', lastname: 'lastname18' },
    { id: 19, name: 'name19', lastname: 'lastname19' },
    { id: 20, name: 'name20', lastname: 'lastname20' },
    { id: 1, name: 'name01', lastname: 'lastname01' },
    { id: 2, name: 'name02', lastname: 'lastname02' },
    { id: 3, name: 'name03', lastname: 'lastname03' },
    { id: 4, name: 'name04', lastname: 'lastname04' },
    { id: 5, name: 'name05', lastname: 'lastname05' },
    { id: 6, name: 'name06', lastname: 'lastname06' },
    { id: 7, name: 'name07', lastname: 'lastname07' },
    { id: 8, name: 'name08', lastname: 'lastname08' },
    { id: 9, name: 'name09', lastname: 'lastname09' },
    { id: 10, name: 'name10', lastname: 'lastname10' },
    { id: 11, name: 'name11', lastname: 'lastname11' },
    { id: 12, name: 'name12', lastname: 'lastname12' },
    { id: 13, name: 'name13', lastname: 'lastname13' },
    { id: 14, name: 'name14', lastname: 'lastname14' },
    { id: 15, name: 'name15', lastname: 'lastname15' },
    { id: 16, name: 'name16', lastname: 'lastname16' },
    { id: 17, name: 'name17', lastname: 'lastname17' },
    { id: 18, name: 'name18', lastname: 'lastname18' },
    { id: 19, name: 'name19', lastname: 'lastname19' },
    { id: 20, name: 'name20', lastname: 'lastname20' },
    { id: 1, name: 'name01', lastname: 'lastname01' },
    { id: 2, name: 'name02', lastname: 'lastname02' },
    { id: 3, name: 'name03', lastname: 'lastname03' },
    { id: 4, name: 'name04', lastname: 'lastname04' },
    { id: 5, name: 'name05', lastname: 'lastname05' },
    { id: 6, name: 'name06', lastname: 'lastname06' },
    { id: 7, name: 'name07', lastname: 'lastname07' },
    { id: 8, name: 'name08', lastname: 'lastname08' },
    { id: 9, name: 'name09', lastname: 'lastname09' },
    { id: 10, name: 'name10', lastname: 'lastname10' },
    { id: 11, name: 'name11', lastname: 'lastname11' },
    { id: 12, name: 'name12', lastname: 'lastname12' },
    { id: 13, name: 'name13', lastname: 'lastname13' },
    { id: 14, name: 'name14', lastname: 'lastname14' },
    { id: 15, name: 'name15', lastname: 'lastname15' },
    { id: 16, name: 'name16', lastname: 'lastname16' },
    { id: 17, name: 'name17', lastname: 'lastname17' },
    { id: 18, name: 'name18', lastname: 'lastname18' },
    { id: 19, name: 'name19', lastname: 'lastname19' },
    { id: 20, name: 'name20', lastname: 'lastname20' },
    { id: 1, name: 'name01', lastname: 'lastname01' },
    { id: 2, name: 'name02', lastname: 'lastname02' },
    { id: 3, name: 'name03', lastname: 'lastname03' },
    { id: 4, name: 'name04', lastname: 'lastname04' },
    { id: 5, name: 'name05', lastname: 'lastname05' },
    { id: 6, name: 'name06', lastname: 'lastname06' },
    { id: 7, name: 'name07', lastname: 'lastname07' },
    { id: 8, name: 'name08', lastname: 'lastname08' },
    { id: 9, name: 'name09', lastname: 'lastname09' },
    { id: 10, name: 'name10', lastname: 'lastname10' },
    { id: 11, name: 'name11', lastname: 'lastname11' },
    { id: 12, name: 'name12', lastname: 'lastname12' },
    { id: 13, name: 'name13', lastname: 'lastname13' },
    { id: 14, name: 'name14', lastname: 'lastname14' },
    { id: 15, name: 'name15', lastname: 'lastname15' },
    { id: 16, name: 'name16', lastname: 'lastname16' },
    { id: 17, name: 'name17', lastname: 'lastname17' },
    { id: 18, name: 'name18', lastname: 'lastname18' },
    { id: 19, name: 'name19', lastname: 'lastname19' },
    { id: 20, name: 'name20', lastname: 'lastname20' },
    { id: 1, name: 'name01', lastname: 'lastname01' },
    { id: 2, name: 'name02', lastname: 'lastname02' },
    { id: 3, name: 'name03', lastname: 'lastname03' },
    { id: 4, name: 'name04', lastname: 'lastname04' },
    { id: 5, name: 'name05', lastname: 'lastname05' },
    { id: 6, name: 'name06', lastname: 'lastname06' },
    { id: 7, name: 'name07', lastname: 'lastname07' },
    { id: 8, name: 'name08', lastname: 'lastname08' },
    { id: 9, name: 'name09', lastname: 'lastname09' },
    { id: 10, name: 'name10', lastname: 'lastname10' },
    { id: 11, name: 'name11', lastname: 'lastname11' },
    { id: 12, name: 'name12', lastname: 'lastname12' },
    { id: 13, name: 'name13', lastname: 'lastname13' },
    { id: 14, name: 'name14', lastname: 'lastname14' },
    { id: 15, name: 'name15', lastname: 'lastname15' },
    { id: 16, name: 'name16', lastname: 'lastname16' },
    { id: 17, name: 'name17', lastname: 'lastname17' },
    { id: 18, name: 'name18', lastname: 'lastname18' },
    { id: 19, name: 'name19', lastname: 'lastname19' },
    { id: 20, name: 'name20', lastname: 'lastname20' },
  ];

  data: any[] = [];

  currentPage = 1;
  pageSize = env.pageSize;
  totalItems = this.dataOriginal.length;
  //columns = ['id', 'name', 'lastname'];

  metaColumns: TMetaColumns = [
    { field: 'id', header: 'ID' },
    { field: 'name', header: 'Nombre del usuario' },
    { field: 'lastname', header: 'Apellido del usuario' },
  ];

  constructor() {
    this.loadPage(1);
  }

  loadPage(page: number) {
    this.currentPage = page;
    this.data = this.dataOriginal.slice(
      (this.currentPage - 1) * this.pageSize,
      this.currentPage * this.pageSize
    );
  }
}
