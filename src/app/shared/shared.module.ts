import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [MainComponent, SideNavComponent],
  exports: [RouterModule, MainComponent, SideNavComponent],
  providers: [],
})
export class SharedModule {}
