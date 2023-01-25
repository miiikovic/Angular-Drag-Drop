import { Component, OnInit, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [
    trigger('fadeInFromTop', [
      transition(':enter', [
        style({
          transform: 'translateY(-100%)',
          opacity: 0
        }),
        animate('500ms ease-in', style({
          transform: 'translateY(0)',
          opacity: 1
        }))
      ])
    ]),
    trigger('fadeInfromLeft', [
      transition(':enter', [
        style({
          transform: 'translateX(-100%)',
          opacity: 0
        }),
        animate('500ms ease-in', style({
          transform: 'translateY(0)',
          opacity: 1
        }))
      ])
    ]),
    trigger('fadeInfromRight', [
      transition(':enter', [
        style({
          transform: 'translateX(100%)',
          opacity: 0
        }),
        animate('500ms ease-in', style({
          transform: 'translateX(0)',
          opacity: 1
        }))
      ])
    ]),
    trigger('fadeInfromBottom', [
      transition(':enter', [
        style({
          transform: 'translateY(100%)',
          opacity: 0
        }),
        animate('500ms ease-in', style({
          transform: 'translateY(0)',
          opacity: 1
        }))
      ])
    ]),

  ]
})
export class HomePageComponent implements OnInit {
  show = false;

  constructor(private router: Router) { }

  get stateName() {
    return this.show ? 'show' : 'hide'
  }

  ngOnInit(): void {
    this.show = true;
  }

  navigateLogin() {
    this.router.navigate(['/login']);
  }

}
