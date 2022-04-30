import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';
import { PlanningComponent } from './planning/planning.component';
import { AddteamComponent } from './addteam/addteam.component';
import { TeamDeatilsComponent } from './team-deatils/team-deatils.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { TeamItemComponent } from './team-item/team-item.component';

const routes: Routes = [
  {path:'', redirectTo:'teams', pathMatch:'full'},
  {path:'teams', component:TeamsComponent, children:[
    {path:"item", component: TeamItemComponent}]
  },
  {path:"detail/:id", component: TeamDeatilsComponent},
  {path:'plann', component:PlanningComponent},
  {path:'add', component:AddteamComponent},
  {path:'**',component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
