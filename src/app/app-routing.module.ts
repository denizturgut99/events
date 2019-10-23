import { SignedUpViewComponent } from './signed-up-view/signed-up-view.component';
import { MainViewComponent } from './main-view/main-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundViewComponent } from './not-found-view/not-found-view.component';


const appRoutes: Routes = [
{
  path:'', component: MainViewComponent
},
 {
  path: 'allEvents', component: MainViewComponent
}, {
  path:'signedEvents', component: SignedUpViewComponent
}, {
  path:'**', component: NotFoundViewComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
