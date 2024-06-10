import { Component } from '@angular/core';

import env from '../../../../../../assets/environment/env.json';
import { ContainerComponent } from '../../../../../shared/components/container/container.component';
import { PaginatorComponent } from '../../../../../shared/components/paginator/paginator.component';
import { TableComponent } from '../../../../../shared/components/table/table.component';
import { TitleComponent } from '../../../../../shared/components/title/title.component';
import { TMetaColumns } from '../../../../../shared/interfaces/metacolumn';

@Component({
  selector: 'cdev-page-course',
  standalone: true,
  imports: [
    ContainerComponent,
    TitleComponent,
    TableComponent,
    PaginatorComponent,
  ],
  templateUrl: './page-course.component.html',
  styleUrl: './page-course.component.css',
})
export class PageCourseComponent {
  dataOriginal = [
    {
      id: 1,
      title: 'Angular',
      description: 'Curso de Angular',
      duration: 40,
      price: 100,
    },
    {
      id: 2,
      title: 'React',
      description: 'Curso de React',
      duration: 40,
      price: 100,
    },
    {
      id: 3,
      title: 'Vue',
      description: 'Curso de Vue',
      duration: 40,
      price: 100,
    },
    {
      id: 4,
      title: 'Svelte',
      description: 'Curso de Svelte',
      duration: 40,
      price: 100,
    },
    {
      id: 5,
      title: 'Angular',
      description: 'Curso de Angular',
      duration: 40,
      price: 100,
    },
    {
      id: 6,
      title: 'React',
      description: 'Curso de React',
      duration: 40,
      price: 100,
    },
    {
      id: 7,
      title: 'Vue',
      description: 'Curso de Vue',
      duration: 40,
      price: 100,
    },
    {
      id: 8,
      title: 'Svelte',
      description: 'Curso de Svelte',
      duration: 40,
      price: 100,
    },
    {
      id: 9,
      title: 'Angular',
      description: 'Curso de Angular',
      duration: 40,
      price: 100,
    },
    {
      id: 10,
      title: 'React',
      description: 'Curso de React',
      duration: 40,
      price: 100,
    },
    {
      id: 11,
      title: 'Vue',
      description: 'Curso de Vue',
      duration: 40,
      price: 100,
    },
    {
      id: 12,
      title: 'Svelte',
      description: 'Curso de Svelte',
      duration: 40,
      price: 100,
    },
    {
      id: 13,
      title: 'Angular',
      description: 'Curso de Angular',
      duration: 40,
      price: 100,
    },
    {
      id: 14,
      title: 'React',
      description: 'Curso de React',
      duration: 40,
      price: 100,
    },
    {
      id: 15,
      title: 'Vue',
      description: 'Curso de Vue',
      duration: 40,
      price: 100,
    },
    {
      id: 16,
      title: 'Svelte',
      description: 'Curso de Svelte',
      duration: 40,
      price: 100,
    },
    {
      id: 17,
      title: 'Angular',
      description: 'Curso de Angular',
      duration: 40,
      price: 100,
    },
    {
      id: 18,
      title: 'React',
      description: 'Curso de React',
      duration: 40,
      price: 100,
    },
    {
      id: 19,
      title: 'Vue',
      description: 'Curso de Vue',
      duration: 40,
      price: 100,
    },
    {
      id: 20,
      title: 'Svelte',
      description: 'Curso de Svelte',
      duration: 40,
      price: 100,
    },
  ];

  data: any[] = [];

  currentPage = 1;
  pageSize = env.pageSize;
  totalItems = this.dataOriginal.length;
  //columns = ['id', 'name', 'lastname'];

  metaColumns: TMetaColumns = [
    { field: 'id', header: 'ID' },
    { field: 'title', header: 'Título' },
    { field: 'description', header: 'Descripción del curso' },
    { field: 'duration', header: 'Duración' },
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
