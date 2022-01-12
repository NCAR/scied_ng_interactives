import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ReloadService } from '../reload.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() title: string;
  @Output() reload = new EventEmitter();
  panelOpenState = false;

  constructor(private reloadService: ReloadService){

  }

  resetApp() {
//this.webapp.goToPage('/apps/create-snowstorm');

    this.reloadService.emitReloadEvent(true);
  }

  ngOnInit() {
  }

}
