import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'cdev-title',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css',
})
export class TitleComponent {
  @Input('title') titleSection!: string;
  @Input('icon') icon!: string;
}
