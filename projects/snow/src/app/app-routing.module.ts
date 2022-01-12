import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateSnowstormComponent } from "./components/create-snowstorm/create-snowstorm.component";

const routes: Routes = [
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
