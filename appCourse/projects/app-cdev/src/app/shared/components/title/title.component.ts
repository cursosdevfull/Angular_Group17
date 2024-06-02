import { Component, Input } from '@angular/core';

@Component({
  selector: 'cdev-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css',
})
export class TitleComponent {
  @Input('title') titleSection!: string;
}
