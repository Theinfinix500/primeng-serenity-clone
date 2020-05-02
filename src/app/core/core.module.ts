import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SideNavComponent, MainComponent],
  exports: [SideNavComponent, MainComponent],
  providers: [],
})
export class CoreModule {}
