import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ResumeComponent implements OnInit {
  @HostBinding('class') class = 'router-flex';

  constructor() { }

  ngOnInit(): void {
  }

}
