import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { TeamsComponent } from './teams/teams.component';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { TeamItemComponent } from './team-item/team-item.component';
import { TeamDeatilsComponent } from './team-deatils/team-deatils.component';
import { AddteamComponent } from './addteam/addteam.component';
import { PlanningComponent } from './planning/planning.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CustomDirectiveDirective,
    TeamsComponent,
    TeamsListComponent,
    TeamItemComponent,
    TeamDeatilsComponent,
    AddteamComponent,
    PlanningComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
