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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainViewComponent,
    SignedUpViewComponent,
    NotFoundViewComponent,
    FilterEvtNamePipe,
    DateSortPipePipe
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
