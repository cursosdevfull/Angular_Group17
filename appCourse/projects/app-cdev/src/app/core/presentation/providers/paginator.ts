import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Injectable()
export class Paginator extends MatPaginatorIntl {
  override firstPageLabel = 'Primera página';
  override lastPageLabel = 'Última página';
  override itemsPerPageLabel = 'Items por página';
  override nextPageLabel = 'Siguiente página';
  override previousPageLabel = 'Página anterior';

  override getRangeLabel = (page: number, pageSize: number, length: number) => {
    const range = `${page * pageSize + 1} - ${
      page * pageSize + pageSize > length ? length : page * pageSize + pageSize
    }`;
    const total = `${length}`;

    return `${range} de ${total}`;
  };
}
