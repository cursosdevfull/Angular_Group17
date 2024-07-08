import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PageVideoComponent } from './page-video/page-video.component';

@NgModule({
  declarations: [PageVideoComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: PageVideoComponent }]),
  ],
  providers: [],
  exports: [],
})
export class VideoModule {}
