import { inject } from '@angular/core';

import env from '../../../../../assets/environment/env.json';
import { LayoutService } from '../../../../config/modules/layout/layout.module';
import { TMetaColumns } from '../../../../shared/interfaces/metacolumn';

export abstract class BaseComponent<Item> {
  abstract dataOriginal: any[];
  abstract totalItems: number;
  abstract metaColumns: TMetaColumns;
  data: Item[] = [];
  currentPage = 1;
  pageSize = env.pageSize;

  constructor() {
    const layoutService = inject(LayoutService);
    layoutService.configuration = {
      headerVisible: true,
      menuVisible: true,
    };
  }

  loadPage(page: number) {
    this.currentPage = page;
    this.data = this.dataOriginal.slice(
      (this.currentPage - 1) * this.pageSize,
      this.currentPage * this.pageSize
    );
  }
}
