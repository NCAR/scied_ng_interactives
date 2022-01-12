import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StormComponent } from "./components/storm/storm.component";

const routes: Routes = [
  {
    path: "storm",
    component: StormComponent
  },
  {
    path: '',
    component: StormComponent
  },
  { path: '**',
    component: StormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
