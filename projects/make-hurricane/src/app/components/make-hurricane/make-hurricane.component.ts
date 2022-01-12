import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'scied-make-hurricane',
  templateUrl: './make-hurricane.component.html',
  styleUrls: ['./make-hurricane.component.scss']
})
export class MakeHurricaneComponent implements OnInit {
  url:string;

  constructor(private renderer: Renderer2) {
    this.setBackground();
  }
  setBackground() {
    this.renderer.addClass(document.body, 'hurr-bkg');
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'hurr-bkg');
  }

}
