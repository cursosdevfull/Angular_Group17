import {
  ApplicationRef,
  Component,
  ComponentRef,
  createComponent,
  EnvironmentInjector,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

import { BaseComponent } from '../../../../../core/presentation/components/base/base.component';
import { AlbumService } from '../../../../../core/presentation/services/album.service';
import { ContainerComponent } from '../../../../../shared/components/container/container.component';
import { ModalComponent } from '../../../../../shared/components/modal/modal.component';
import { PaginatorComponent } from '../../../../../shared/components/paginator/paginator.component';
import { TableComponent } from '../../../../../shared/components/table/table.component';
import { TitleComponent } from '../../../../../shared/components/title/title.component';
import { TMetaColumns } from '../../../../../shared/interfaces/metacolumn';
import { ISchedule } from '../../../../interfaces/schedule.interface';
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
  providers: [AlbumService],
})
export class PageScheduleComponent extends BaseComponent<ISchedule> {
  @ViewChild('contenedor') contenedor!: ViewContainerRef;
  component!: ComponentRef<any>;

  dataOriginal: ISchedule[] = [
    { id: 1, course: 'Angular', date: '2021-10-10', hour: '10:00' },
    { id: 2, course: 'React', date: '2021-10-10', hour: '10:00' },
    { id: 3, course: 'Vue', date: '2021-10-10', hour: '10:00' },
    { id: 4, course: 'Svelte', date: '2021-10-10', hour: '10:00' },
    { id: 5, course: 'Angular', date: '2021-10-10', hour: '10:00' },
    { id: 6, course: 'React', date: '2021-10-10', hour: '10:00' },
    { id: 7, course: 'Vue', date: '2021-10-10', hour: '10:00' },
    { id: 8, course: 'Svelte', date: '2021-10-10', hour: '10:00' },
    { id: 9, course: 'Angular', date: '2021-10-10', hour: '10:00' },
    { id: 10, course: 'React', date: '2021-10-10', hour: '10:00' },
    { id: 11, course: 'Vue', date: '2021-10-10', hour: '10:00' },
    { id: 12, course: 'Svelte', date: '2021-10-10', hour: '10:00' },
    { id: 13, course: 'Angular', date: '2021-10-10', hour: '10:00' },
    { id: 14, course: 'React', date: '2021-10-10', hour: '10:00' },
    { id: 15, course: 'Vue', date: '2021-10-10', hour: '10:00' },
    { id: 16, course: 'Svelte', date: '2021-10-10', hour: '10:00' },
    { id: 17, course: 'Angular', date: '2021-10-10', hour: '10:00' },
    { id: 18, course: 'React', date: '2021-10-10', hour: '10:00' },
    { id: 19, course: 'Vue', date: '2021-10-10', hour: '10:00' },
    { id: 20, course: 'Svelte', date: '2021-10-10', hour: '10:00' },
    { id: 21, course: 'Angular', date: '2021-10-10', hour: '10:00' },
    { id: 22, course: 'React', date: '2021-10-10', hour: '10:00' },
    { id: 23, course: 'Vue', date: '2021-10-10', hour: '10:00' },
    { id: 24, course: 'Svelte', date: '2021-10-10', hour: '10:00' },
    { id: 25, course: 'Angular', date: '2021-10-10', hour: '10:00' },
    { id: 26, course: 'React', date: '2021-10-10', hour: '10:00' },
    { id: 27, course: 'Vue', date: '2021-10-10', hour: '10:00' },
    { id: 28, course: 'Svelte', date: '2021-10-10', hour: '10:00' },
    { id: 29, course: 'Angular', date: '2021-10-10', hour: '10:00' },
    { id: 30, course: 'React', date: '2021-10-10', hour: '10:00' },
    { id: 31, course: 'Vue', date: '2021-10-10', hour: '10:00' },
    { id: 32, course: 'Svelte', date: '2021-10-10', hour: '10:00' },
    { id: 33, course: 'Angular', date: '2021-10-10', hour: '10:00' },
    { id: 34, course: 'React', date: '2021-10-10', hour: '10:00' },
    { id: 35, course: 'Vue', date: '2021-10-10', hour: '10:00' },
    { id: 36, course: 'Svelte', date: '2021-10-10', hour: '10:00' },
    { id: 37, course: 'Angular', date: '2021-10-10', hour: '10:00' },
    { id: 38, course: 'React', date: '2021-10-10', hour: '10:00' },
    { id: 39, course: 'Vue', date: '2021-10-10', hour: '10:00' },
  ];

  totalItems = this.dataOriginal.length;

  metaColumns: TMetaColumns = [
    { field: 'id', header: 'ID' },
    { field: 'course', header: 'Nombre del curso' },
    { field: 'date', header: 'Fecha de inicio' },
    { field: 'hour', header: 'Hora de inicio' },
  ];

  constructor(
    private appRef: ApplicationRef,
    private injector: EnvironmentInjector,
    private albumService: AlbumService
  ) {
    super();
    this.loadPage(this.currentPage);
  }

  async ngOnInit() {
    const albums = await this.albumService.getAlbums();
    console.log('Albums', albums);
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
    //componentRef.instance.addClass = 'modal_width';
  }

  captureForm(data: any) {
    console.log(data);
  }
}
