import { AfterViewInit, Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('signatureAnimation', [
      state('start', style({
        opacity: 0
      })),
      state('end', style({
        opacity: 1
      })),
      transition('start=>end', animate('3000ms')),
    ]),
  ]
})
export class HomeComponent implements OnInit, AfterViewInit {
  signatureAnimationState = 'start';

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.signatureAnimationState = 'end';
  }

}
