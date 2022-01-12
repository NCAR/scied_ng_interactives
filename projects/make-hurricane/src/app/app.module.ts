import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { Router } from '@angular/router';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatExpansionModule } from "@angular/material/expansion";
import { MatButtonToggleModule } from "@angular/material/button-toggle";

import { DragDropModule } from '@angular/cdk/drag-drop';
import { DroppableDirective } from './components/make-hurricane/droppable.directive';
import { DraggableDirective } from './components/make-hurricane/draggable.directive';
import { DragService } from './components/make-hurricane/drag.service';

import { HurrSidebarComponent } from './components/make-hurricane/sidebar/sidebar.component';
import { HurrMapContainerComponent } from './components/make-hurricane/map-container/map-container.component';
import { MakeHurricaneComponent } from "./components/make-hurricane/make-hurricane.component";


@NgModule({
  declarations: [
    AppComponent,
    DroppableDirective,
    DraggableDirective,
    HurrMapContainerComponent,
    HurrSidebarComponent,
    MakeHurricaneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    DragDropModule,
    MatButtonToggleModule
  ],
  providers: [
  DragService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
