import { Component, OnInit} from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'create-snowstorm',
  templateUrl: './create-snowstorm.component.html',
  styleUrls: ['./create-snowstorm.component.scss']
})
export class CreateSnowstormComponent implements OnInit {
  title = "Create a SNOWSTORM";

  constructor() {

  }

  ngOnInit() {
  }
}
