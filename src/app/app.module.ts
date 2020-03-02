import { CityJsonDataService } from './city-json-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { MainViewComponent } from './main-view/main-view.component';
import { SignedUpViewComponent } from './signed-up-view/signed-up-view.component';
import { NotFoundViewComponent } from './not-found-view/not-found-view.component';
import { FilterEvtNamePipe } from './pipes/filter-evt-name.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateSortPipePipe } from './pipes/date-sort-pipe.pipe';
import { EventViewComponent } from './event-view/event-view.component';
import { DisplayEventsBodyComponent } from './display-events-body/display-events-body.component';
import { ModalComponent } from './modal/modal.component';
import { ForumViewComponent } from './forum-view/forum-view.component';
import { CreateEventsComponent } from './create-events/create-events.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainViewComponent,
    SignedUpViewComponent,
    NotFoundViewComponent,
    FilterEvtNamePipe,
    DateSortPipePipe,
    EventViewComponent,
    DisplayEventsBodyComponent,
    ModalComponent,
    ForumViewComponent,
    CreateEventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CityJsonDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
