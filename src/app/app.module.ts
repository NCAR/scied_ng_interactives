import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { Router } from '@angular/router';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSliderModule } from "@angular/material/slider";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatRadioModule } from "@angular/material/radio";

import { MatDialogModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { DroppableDirective } from './components/create-snowstorm/droppable.directive';
import { DraggableDirective } from './components/create-snowstorm/draggable.directive';
import { DragService } from './components/create-snowstorm/drag.service';
import { ReloadService } from './components/create-snowstorm/reload.service';

import { LayoutModule } from "@angular/cdk/layout";
import { FlexLayoutModule } from "@angular/flex-layout";

import { HurricaneComponent } from "./components/hurricane/hurricane.component";
import { HurricanePathComponent } from "./components/hurricane-path/hurricane-path.component";
import { StormComponent } from "./components/storm/storm.component";
import { StormControlsComponent } from "./components/storm-controls/storm-controls.component";
import { CreateSnowstormComponent } from "./components/create-snowstorm/create-snowstorm.component";
import { SidebarComponent } from './components/create-snowstorm/sidebar/sidebar.component';
import { MapContainerComponent } from './components/create-snowstorm/map-container/map-container.component';
import { VideoComponent } from './components/create-snowstorm/video/video.component';

import * as fromServices from "./services";
import { PredictComponent } from "./components/predict/predict.component";









@NgModule({
  declarations: [
    AppComponent,
    StormComponent,
    StormControlsComponent,
    HurricaneComponent,
    HurricanePathComponent,
    CreateSnowstormComponent,
    DroppableDirective,
    DraggableDirective,
    PredictComponent,
    MapContainerComponent,
    SidebarComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatButtonModule,
    MatExpansionModule,
    MatTooltipModule,
    MatIconModule,
    MatSliderModule,
    MatSnackBarModule,
    DragDropModule,
    MatButtonToggleModule,
    MatRadioModule,
    FlexLayoutModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  providers: [
  DragService,
  ReloadService,
  ...fromServices.services
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
