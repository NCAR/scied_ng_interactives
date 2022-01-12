import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HurricaneComponent } from "./components/hurricane/hurricane.component";
import { PredictComponent } from "./components/predict/predict.component";

const routes: Routes = [
  {
    path: "hurricane",
    component: HurricaneComponent
  },
  {
    path: "predict",
    component: PredictComponent
  },
  {
    path: '',
    component: HurricaneComponent
  },
  { path: '**',
    component: HurricaneComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
