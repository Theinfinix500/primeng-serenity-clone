import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SideNavComponent implements OnInit {
  @ViewChild('sidenav', { static: false }) sideNav: ElementRef;

  ngOnInit() {}
}
