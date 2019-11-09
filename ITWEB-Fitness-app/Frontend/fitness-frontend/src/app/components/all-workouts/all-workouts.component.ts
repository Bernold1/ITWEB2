import { Component, OnInit } from "@angular/core";
import { WorkoutService } from "src/app/other-services/workout.service";

@Component({
  selector: "app-all-workouts",
  templateUrl: "./all-workouts.component.html",
  styleUrls: ["./all-workouts.component.css"]
})
export class AllWorkoutsComponent implements OnInit {
  workouts = [];

  constructor(private workoutService: WorkoutService) {}

  ngOnInit() {
    //Subscribing to the observable inside of the workout service to fetch the response data from the server
    this.workoutService
      .getAllWorkouts()
      .subscribe(res => (this.workouts = res), err => console.log(err));
    console.log(this.workouts);
  }
}
