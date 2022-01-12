import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-hurr',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class HurrSidebarComponent implements OnInit {
  panelOpenState = false;

  constructor() { }

  ngOnInit() {
  }

}
