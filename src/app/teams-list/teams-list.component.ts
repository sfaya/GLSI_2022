import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from '../team';
import { TeamService } from '../team.service';


@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {

  ListTeams!:Array<Team>;

  constructor( private teamSer: TeamService, private route: Router) { }

  ngOnInit(): void {
      this.teamSer.getAllTeams().subscribe(
        data => this.ListTeams=data
      )
  }

  showDetails(data:Number){
    this.route.navigate(['detail', data]);
  }

}
