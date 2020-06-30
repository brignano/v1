import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  @HostBinding('class') class = 'router-flex';
  projects = ['website', 'coronavirus', 'test'];

  constructor() { }

  ngOnInit(): void {
  }

}
