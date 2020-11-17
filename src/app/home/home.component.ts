import { AfterViewInit, Component, HostBinding, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home',
  animations: [
    trigger(
      'enterAnimation_h1', [
        transition(':enter', [
          style({transform: 'translateY(-20%)', opacity: 0.2}),
          animate('1000ms', style({transform: 'translateY(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateY(0)', opacity: 1}),
          animate('1000ms', style({transform: 'translateY(-20%)', opacity: 0.2}))
        ])
      ]
    ),
    trigger(
      'enterAnimation_contactBtn', [
        transition(':enter', [
          style({opacity: 0}),
          animate('1000ms', style({opacity: 1}))
        ]),
        transition(':leave', [
          style({opacity: 1}),
          animate('1000ms', style({opacity: 0}))
        ])
      ]
    )
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, AfterViewInit {

  @HostBinding('class') class = 'router-flex';
  description = '';
  descriptionText = 'Full Stack Developer';

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.typingCallback(this);
  }

  typingCallback(that) {
    const totalLength = that.descriptionText.length;
    const currentLength = that.description.length;
    if (currentLength < totalLength) {
      that.description += that.descriptionText[currentLength];
      setTimeout(that.typingCallback, 200, that);
    }
  }

}
