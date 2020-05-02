import {
  Component,
  ViewChild,
  ElementRef,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { SideNavComponent } from './core/side-nav/side-nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(SideNavComponent, { static: false })
  sideNavComponent: SideNavComponent;
  @ViewChild('layoutWrapper', { static: false }) layoutWrapper: ElementRef;

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
