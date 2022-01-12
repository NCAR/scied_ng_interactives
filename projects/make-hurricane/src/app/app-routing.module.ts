import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MakeHurricaneComponent } from "./components/make-hurricane/make-hurricane.component";

const routes: Routes = [
  {
    path: "make-hurricane",
    component: MakeHurricaneComponent
  },
  {
    path: '',
    component: MakeHurricaneComponent
  },
  { path: '**',
  component: MakeHurricaneComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
