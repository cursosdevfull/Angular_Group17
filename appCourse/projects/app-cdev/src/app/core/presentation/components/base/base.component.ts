import env from '../../../../../assets/environment/env.json';
import { TMetaColumns } from '../../../../shared/interfaces/metacolumn';

export abstract class BaseComponent<Item> {
  abstract dataOriginal: any[];
  abstract totalItems: number;
  abstract metaColumns: TMetaColumns;
  data: Item[] = [];
  currentPage = 1;
  pageSize = env.pageSize;

  loadPage(page: number) {
    this.currentPage = page;
    this.data = this.dataOriginal.slice(
      (this.currentPage - 1) * this.pageSize,
      this.currentPage * this.pageSize
    );
  }
}
