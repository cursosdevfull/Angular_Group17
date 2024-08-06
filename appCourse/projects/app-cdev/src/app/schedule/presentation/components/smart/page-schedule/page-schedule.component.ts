import {
  ApplicationRef,
  Component,
  ComponentRef,
  createComponent,
  EnvironmentInjector,
  inject,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

import { BaseComponent } from '../../../../../core/presentation/components/base/base.component';
import { ContainerComponent } from '../../../../../shared/components/container/container.component';
import { ModalComponent } from '../../../../../shared/components/modal/modal.component';
import { PaginatorComponent } from '../../../../../shared/components/paginator/paginator.component';
import { TableComponent } from '../../../../../shared/components/table/table.component';
import { TitleComponent } from '../../../../../shared/components/title/title.component';
import { TMetaColumns } from '../../../../../shared/interfaces/metacolumn';
import { ScheduleApplication } from '../../../../application/schedule.application';
import { ScheduleRepository } from '../../../../domain/repositories/schedule.repository';
import { Schedule } from '../../../../domain/roots/schedule';
import { ScheduleResult } from '../../../../infrastructure/schedule.infrastructure';
import { FormComponent } from '../../dumm/form/form.component';

@Component({
  selector: 'cdev-page-schedule',
  standalone: true,
  imports: [
    ContainerComponent,
    TitleComponent,
    TableComponent,
    PaginatorComponent,
    ModalComponent,
  ],
  templateUrl: './page-schedule.component.html',
  styleUrl: './page-schedule.component.css',
})
export class PageScheduleComponent extends BaseComponent<
  ScheduleResult,
  Schedule,
  ScheduleRepository,
  ScheduleApplication
> {
  @ViewChild('contenedor') contenedor!: ViewContainerRef;
  component!: ComponentRef<any>;

  override application: ScheduleApplication = inject(ScheduleApplication);

  metaColumns: TMetaColumns = [
    { field: 'scheduleId', header: 'ID' },
    { field: 'title', header: 'Título' },
    { field: 'status', header: 'Estado' },
  ];

  constructor(
    private appRef: ApplicationRef,
    private injector: EnvironmentInjector
  ) {
    super();
    this.loadPage(this.currentPage);
  }

  openModal() {
    const componentRef = createComponent(FormComponent, {
      environmentInjector: this.injector,
    });

    componentRef.instance.close.subscribe((data) => {
      console.log('Cerrando modal', data);
      this.appRef.detachView(componentRef.hostView);
    });
    const element = componentRef.location.nativeElement.querySelector(
      '.modal-backdrop__modal-content'
    );
    element.classList.add('modal_width');
    document.body.appendChild(componentRef.location.nativeElement);
    this.appRef.attachView(componentRef.hostView);
  }

  captureForm(data: any) {
    console.log(data);
  }
}
