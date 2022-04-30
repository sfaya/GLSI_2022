import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team } from '../team';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-deatils',
  templateUrl: './team-deatils.component.html',
  styleUrls: ['./team-deatils.component.css']
})
export class TeamDeatilsComponent implements OnInit {

  constructor( private activRoute: ActivatedRoute, private teamSer: TeamService) { }
   id:any;
   myTeam!:Team;
  ngOnInit(): void {
    this.id = this.activRoute.snapshot.params['id'];
    this.teamSer.getTeamById(Number(this.id)).subscribe(
      e => this.myTeam=e
    )

  }

}
