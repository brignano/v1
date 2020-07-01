import { AfterViewInit, Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
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
