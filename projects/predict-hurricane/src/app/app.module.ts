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
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatRadioModule } from "@angular/material/radio";
import { MatFormFieldModule} from '@angular/material/form-field';

import { LayoutModule } from "@angular/cdk/layout";
import { FlexLayoutModule } from "@angular/flex-layout";

import { HurricaneComponent } from "./components/hurricane/hurricane.component";
import { HurricanePathComponent } from "./components/hurricane-path/hurricane-path.component";
import { PredictComponent } from "./components/predict/predict.component";

import * as fromServices from "./services";


@NgModule({
  declarations: [
    AppComponent,
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
    MatSnackBarModule,
    MatButtonToggleModule,
    MatRadioModule,
    FlexLayoutModule,
    MatFormFieldModule,
  ],
  providers: [
  ...fromServices.services
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
