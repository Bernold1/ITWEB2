import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class WorkoutService {
  private allWorkoutsURL = "http://localhost:3000/api/workout/allworkouts";
  private createWorkoutURL = "http://localhost:3000/api/workout/createworkout";

  constructor(private http: HttpClient) {}

  //is observable
  getAllWorkouts() {
    return this.http.get<any>(this.allWorkoutsURL);
  }
}
