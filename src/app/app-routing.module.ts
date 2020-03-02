import { CreateEventsComponent } from './create-events/create-events.component';
import { ForumViewComponent } from './forum-view/forum-view.component';
import { SignedUpViewComponent } from './signed-up-view/signed-up-view.component';
import { MainViewComponent } from './main-view/main-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundViewComponent } from './not-found-view/not-found-view.component';


const appRoutes: Routes = [
{
  path:'', component: ForumViewComponent
}, {
  path: 'allEvents', component: MainViewComponent
}, {
  path:'signedEvents', component: SignedUpViewComponent
}, {
  path: 'createEvents', component: CreateEventsComponent
}, {
  path:'**', component: NotFoundViewComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
