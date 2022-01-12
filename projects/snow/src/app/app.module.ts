import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { Router } from '@angular/router';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatExpansionModule } from "@angular/material/expansion";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatButtonToggleModule } from "@angular/material/button-toggle";

import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReloadService } from './components/create-snowstorm/reload.service';

import { CreateSnowstormComponent } from "./components/create-snowstorm/create-snowstorm.component";
import { SidebarComponent } from './components/create-snowstorm/sidebar/sidebar.component';
import { MapContainerComponent } from './components/create-snowstorm/map-container/map-container.component';
import { VideoComponent } from './components/create-snowstorm/video/video.component';




@NgModule({
  declarations: [
    AppComponent,
    CreateSnowstormComponent,
    SidebarComponent,
    MapContainerComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatSnackBarModule,
    DragDropModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
