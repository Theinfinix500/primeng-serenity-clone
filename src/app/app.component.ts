import {
  Component,
  ViewChild,
  ElementRef,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('sidenav', { static: false }) sideNav: ElementRef;
  @ViewChild('layoutWrapper', { static: false }) layoutWrapper: ElementRef;

  ngOnInit() {}

  ngAfterViewInit() {
    fromEvent(this.sideNav.nativeElement, 'mouseover').subscribe(() => {
      this.layoutWrapper.nativeElement.classList.toggle(
        'layout-wrapper-active'
      );
    });
    fromEvent(this.sideNav.nativeElement, 'mouseout').subscribe(() => {
      this.layoutWrapper.nativeElement.classList.toggle(
        'layout-wrapper-active'
      );
    });
  }
}
