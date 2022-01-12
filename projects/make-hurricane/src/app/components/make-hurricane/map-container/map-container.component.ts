import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';

import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-map-container-hurr',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.css']
})
export class HurrMapContainerComponent implements OnInit {

  baseAssetPath:string = environment.pathAssets;
  mapBaseImg:string = this.baseAssetPath+'apps/make-hurricane/map-base.jpg';
  mapSstempImg:string = this.baseAssetPath+'apps/make-hurricane/map-sstemp.jpg';
  mapMoistImg:string = this.baseAssetPath+'apps/make-hurricane/map-moist.jpg';
  mapWindImg:string = this.baseAssetPath+'apps/make-hurricane/map-wind.jpg';
  symbolImg:string = this.baseAssetPath+'apps/make-hurricane/symbol.png';
  //Drag and drop arrays
  starterList = [ 'HS' ];

  dropArea0 = [];
  dropArea1 = [];
  dropArea2 = [];
  dropArea3 = [];
  dropArea4 = [];
  dropArea5 = [];
  dropArea6 = [];
  dropArea7 = [];
  dropArea8 = [];
  dropArea9 = [];
  dropArea10 = [];
  dropArea11 = [];
  dropArea12 = [];

  testList = [];

  dropAreas = [this.dropArea0,
              this.dropArea1,
              this.dropArea2,
              this.dropArea3,
              this.dropArea4,
              this.dropArea5,
              this.dropArea6,
              this.dropArea7,
              this.dropArea8,
              this.dropArea9,
              this.dropArea10,
              this.dropArea11,
              this.dropArea12
            ];

  map1 = 'active'; //Base map
  sstemp = '';
  moist = '';
  wind = '';
  closeButton = '';

  thumbX = '65%';
  thumbY = '71%';

  hoa = ['','','','','','','','','','','','',''];

  drop(event: CdkDragDrop<string[]>)
  {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
    else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
    this.displayOutcome(event.container.id);
    this.calculateDotPosition(event.container.element.nativeElement.offsetLeft, event.container.element.nativeElement.offsetTop);
  }

  /** Do not allow manual return. */
  noReturnPredicate() {
    return false;
  }

  selectMapOverlay(map) {
    this.hideMapOverlay();
    this.map1 = '';
    this.closeButton = 'active';
    this[map] = 'active';
  }

  hideMapOverlay() {
    this.map1 = 'active';
    this.sstemp = '';
    this.moist = '';
    this.wind = '';
    this.closeButton = '';
  }

  calculateDotPosition (x, y) {
    //Calculate new dot position including border offsets Y-40px, X-50px;
    let newPosX = ((x/740)*100);
    let newPosY = ((y/360)*100);

    this.thumbX = newPosX + '%';
    this.thumbY = newPosY + '%';
  }

  clearOutcomes(){
    this.hoa = ['','','','','','','','','','','','',''];
  }

  displayOutcome(id) {
    this.clearOutcomes();
    let index = id.substr(1);
        index = parseInt(index);
    this.hoa[index] = 'active';
  }


  constructor() { }

  ngOnInit() {
  }

}
