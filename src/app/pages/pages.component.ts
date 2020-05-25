import {
  Component,
  ViewChild,
  ElementRef,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { SideNavComponent } from '../shared/side-nav/side-nav.component';

@Component({
  selector: 'app-pages',
  template: `
    <div class="layout-wrapper" #layoutWrapper>
      <app-side-nav></app-side-nav>
      <app-main></app-main>
    </div>
  `,
  styles: [],
})
export class PagesComponent implements OnInit, AfterViewInit {
  @ViewChild(SideNavComponent, { static: false })
  sideNavComponent: SideNavComponent;
  @ViewChild('layoutWrapper', { static: false }) layoutWrapper: ElementRef;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    fromEvent(
      this.sideNavComponent.sideNav.nativeElement,
      'mouseover'
    ).subscribe(() => {
      this.layoutWrapper.nativeElement.classList.toggle(
        'layout-wrapper-active'
      );
    });
    fromEvent(
      this.sideNavComponent.sideNav.nativeElement,
      'mouseout'
    ).subscribe(() => {
      this.layoutWrapper.nativeElement.classList.toggle(
        'layout-wrapper-active'
      );
    });
  }
}
