import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'create-snowstorm',
  templateUrl: './create-snowstorm.component.html',
  styleUrls: ['./create-snowstorm.component.scss']
})
export class CreateSnowstormComponent implements OnInit {
  title: string = "Create a SNOWSTORM";

  constructor(private renderer: Renderer2) {
    this.setBackground();

  }
  setBackground() {
    this.renderer.addClass(document.body, 'videos');
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'videos');
  }
}
