import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormArray } from "@angular/forms";
import { Subscription } from "rxjs";
import { WorkoutService } from "src/app/other-services/workout.service";

@Component({
  selector: "app-create-workout",
  templateUrl: "./create-workout.component.html",
  styleUrls: ["./create-workout.component.css"]
})
export class CreateWorkoutComponent implements OnInit {
  workoutForm: FormGroup;
  workoutFormSub: Subscription;

  constructor(private workoutService: WorkoutService) {}

  ngOnInit() {
    this.workoutForm = new FormGroup({
      workoutName: new FormControl(""),
      exercises: new FormArray([this.initExercise()])
    });
  }

  initExercise() {
    return new FormGroup({
      exerciseName: new FormControl(""),
      description: new FormControl(""),
      set: new FormControl(""),
      reps: new FormControl("")
    });
  }

  addExercise() {
    const control = <FormArray>this.workoutForm.get("exercises");
    control.push(this.initExercise());
  }

  getExercises(form) {
    return form.controls.exercises.controls;
  }

  onSubmit(form) {
    //Gonna move this to the service
  }
}
