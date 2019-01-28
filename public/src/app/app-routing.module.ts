import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';
import { ParentComponent } from './parent/parent.component';
//change Routes according to wireframe.
const routes: Routes = [
  {path:'movies/:id/reviews', component:HomeComponent},
  {path:'', pathMatch:'full', redirectTo:'/movies'},
  // {path:'movies/new', component:NewComponent},
  {path:'movies/edit/:id', component:EditComponent},
  {path:'movies/:id', component:DetailsComponent},
  {path:'movies', component:ParentComponent},
  //star routes go at the bottom!
  { path: '**', component: ParentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
