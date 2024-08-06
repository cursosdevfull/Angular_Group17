import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { BaseComponent } from '../../../../../core/presentation/components/base/base.component';
import { ContainerComponent } from '../../../../../shared/components/container/container.component';
import { PaginatorComponent } from '../../../../../shared/components/paginator/paginator.component';
import { TableComponent } from '../../../../../shared/components/table/table.component';
import { TitleComponent } from '../../../../../shared/components/title/title.component';
import { TMetaColumns } from '../../../../../shared/interfaces/metacolumn';
import { CourseApplication } from '../../../../application/course.application';
import { CourseRepository } from '../../../../domain/repositories/course.repository';
import { Course } from '../../../../domain/roots/course';
import { CourseResult } from '../../../../infrastructure/course.infrastructure';
import { FormComponent } from '../../dumb/form/form.component';

@Component({
  selector: 'cdev-page-course',
  standalone: true,
  imports: [
    ContainerComponent,
    TitleComponent,
    TableComponent,
    PaginatorComponent,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './page-course.component.html',
  styleUrl: './page-course.component.css',
})
export class PageCourseComponent extends BaseComponent<
  CourseResult,
  Course,
  CourseRepository,
  CourseApplication
> {
  override application: CourseApplication = inject(CourseApplication);

  metaColumns: TMetaColumns = [
    { field: 'courseId', header: 'ID' },
    { field: 'title', header: 'Título' },
    { field: 'slug', header: 'Ruta corta' },
    { field: 'status', header: 'Estado' },
  ];

  constructor(private readonly dialog: MatDialog) {
    super();
    this.loadPage(this.currentPage);
  }

  openModal(data: any = null) {
    this.dialog.open(FormComponent, {
      panelClass: 'modal-course',
      disableClose: true,
      data,
    });
  }
}
