import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StormComponent } from "./components/storm/storm.component";
import { HurricaneComponent } from "./components/hurricane/hurricane.component";
import { PredictComponent } from "./components/predict/predict.component";
import { CreateSnowstormComponent } from "./components/create-snowstorm/create-snowstorm.component";

const routes: Routes = [
  {
    path: "storm",
    component: StormComponent
  },
  {
    path: "hurricane",
    component: HurricaneComponent
  },
  {
    path: "predict",
    component: PredictComponent
  },
  {
    path: "snow",
    component: CreateSnowstormComponent
  },
  {
    path: '',
    component: CreateSnowstormComponent
  },
  { path: '**',
    component: CreateSnowstormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
