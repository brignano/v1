import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-toolbar',
  animations: [
    trigger(
      'enterAnimation_Home', [
        transition(':enter', [
          style({transform: 'translateY(-100%)', opacity: 0}),
          animate('1000ms', style({transform: 'translateY(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateY(0)', opacity: 1}),
          animate('1000ms', style({transform: 'translateY(-100%)', opacity: 0}))
        ])
      ]
    ),
    trigger(
      'enterAnimation_Resume', [
        transition(':enter', [
          style({transform: 'translateY(-100%)', opacity: 0}),
          animate('1250ms', style({transform: 'translateY(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateY(0)', opacity: 1}),
          animate('1250ms', style({transform: 'translateY(-100%)', opacity: 0}))
        ])
      ]
    ),
    trigger(
      'enterAnimation_Projects', [
        transition(':enter', [
          style({transform: 'translateY(-100%)', opacity: 0}),
          animate('1500ms', style({transform: 'translateY(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateY(0)', opacity: 1}),
          animate('1500ms', style({transform: 'translateY(-100%)', opacity: 0}))
        ])
      ]
    )
  ],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
