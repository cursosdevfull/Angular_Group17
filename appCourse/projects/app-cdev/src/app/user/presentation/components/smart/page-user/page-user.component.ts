import { Component } from '@angular/core';

import { BaseComponent } from '../../../../../core/presentation/components/base/base.component';
import { ContainerComponent } from '../../../../../shared/components/container/container.component';
import { PaginatorComponent } from '../../../../../shared/components/paginator/paginator.component';
import { TableComponent } from '../../../../../shared/components/table/table.component';
import { TitleComponent } from '../../../../../shared/components/title/title.component';
import { TMetaColumns } from '../../../../../shared/interfaces/metacolumn';
import { UserService } from '../../../../services/user.service';
import { IUser } from '../../../interfaces/user.interface';

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
export class PageUserComponent extends BaseComponent<IUser> {
  dataOriginal: IUser[] = [];

  totalItems = this.dataOriginal.length;

  metaColumns: TMetaColumns = [
    { field: 'id', header: 'ID' },
    { field: 'name', header: 'Nombre del usuario' },
    { field: 'lastname', header: 'Apellido del usuario' },
  ];

  constructor(private readonly userService: UserService) {
    super();
    this.run();
  }

  async run() {
    this.dataOriginal = await this.userService.getUsers();
    this.totalItems = this.dataOriginal.length;
    this.loadPage(this.currentPage);
  }
}
