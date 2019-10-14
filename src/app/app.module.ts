import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

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

import { LayoutModule } from "@angular/cdk/layout";
import { FlexLayoutModule } from "@angular/flex-layout";

import { HurricaneComponent } from "./components/hurricane/hurricane.component";
import { HurricanePathComponent } from "./components/hurricane-path/hurricane-path.component";
import { StormComponent } from "./components/storm/storm.component";
import { StormControlsComponent } from "./components/storm-controls/storm-controls.component";

import * as fromServices from "./services";
import { PredictComponent } from "./components/predict/predict.component";

@NgModule({
  declarations: [
    AppComponent,
    StormComponent,
    StormControlsComponent,
    HurricaneComponent,
    HurricanePathComponent,
    PredictComponent
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
    MatButtonToggleModule,
    MatRadioModule,
    FlexLayoutModule
  ],
  providers: [...fromServices.services],
  bootstrap: [AppComponent]
})
export class AppModule {}
