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

import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { DroppableDirective } from './components/make-hurricane/droppable.directive';
import { DraggableDirective } from './components/make-hurricane/draggable.directive';
import { DragService } from './components/make-hurricane/drag.service';
import { ReloadService } from './components/create-snowstorm/reload.service';

import { HurrSidebarComponent } from './components/make-hurricane/sidebar/sidebar.component';
import { HurrMapContainerComponent } from './components/make-hurricane/map-container/map-container.component';
import { MakeHurricaneComponent } from "./components/make-hurricane/make-hurricane.component";


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
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {HttpClientModule, HttpClient} from '@angular/common/http';

import * as fromServices from "./services";
import { PredictComponent } from "./components/predict/predict.component";


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

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
    HurrMapContainerComponent,
    HurrSidebarComponent,
    MakeHurricaneComponent,
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
    MatFormFieldModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
  DragService,
  ReloadService,
  ...fromServices.services
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
