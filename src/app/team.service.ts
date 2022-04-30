import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from './team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

URL = "http://localhost:3000/Teams";

  constructor(private http: HttpClient) {}

  getAllTeams():Observable<Team[]>{
      return this.http.get<Team[]>(this.URL);
  }

  getTeamById(id: Number){
    return this.http.get<Team>(this.URL+'/'+id);
  }

  addTeam(T: Team){
    return this.http.post(this.URL, T);
  }

  updateTeam(id:Number, T:Team){
    return this.http.put(this.URL+'/'+id, T);
  }

  deleteTeam(id:Number){
    return this.http.delete(this.URL+'/'+id);

  }

}
