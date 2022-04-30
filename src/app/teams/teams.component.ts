import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  addNewTeam(){
    this.route.navigate(['add']);
  }
}
