import { inject } from '@angular/core';
import { map } from 'rxjs';

import env from '../../../../../assets/environment/env.json';
import { LayoutService } from '../../../../config/modules/layout/layout.module';
import { TMetaColumns } from '../../../../shared/interfaces/metacolumn';
import { BaseApplication } from '../../../application/base';
import {
  BaseRepository,
  ResultByPage,
} from '../../../domain/repositories/base';

export abstract class BaseComponent<
  Item,
  Entity,
  Repository extends BaseRepository<Entity, Item>,
  Application extends BaseApplication<Entity, Item, Repository>
> {
  totalItems: number = 0;
  abstract metaColumns: TMetaColumns;
  data: Item[] = [];
  currentPage = 1;
  pageSize = env.pageSize;

  abstract application: Application;

  constructor() {
    const layoutService = inject(LayoutService);
    layoutService.configuration = {
      headerVisible: true,
      menuVisible: true,
    };
  }

  loadPage(page: number) {
    this.currentPage = page;
    /*this.data = this.dataOriginal.slice(
      (this.currentPage - 1) * this.pageSize,
      this.currentPage * this.pageSize
    );*/
    this.application
      .getByPage(this.currentPage, this.pageSize)
      .pipe(
        map((resp: ResultByPage<Item>) => {
          this.totalItems = resp.total;
          return resp.data;
        })
      )
      .subscribe((data) => (this.data = data));
  }
}
