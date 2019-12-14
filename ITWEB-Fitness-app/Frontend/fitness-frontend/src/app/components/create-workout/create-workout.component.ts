import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormArray, FormBuilder } from "@angular/forms";
import { WorkoutService } from "src/app/other-services/workout.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-create-workout",
  templateUrl: "./create-workout.component.html",
  styleUrls: ["./create-workout.component.css"]
})
export class CreateWorkoutComponent implements OnInit {
  workoutForm: FormGroup;

  constructor(
    private workoutService: WorkoutService,
    private fb: FormBuilder,
    private _router: Router
  ) {
    this.workoutForm = this.fb.group({
      workoutName: "",
      exercises: this.fb.array([])
    });
  }

  ngOnInit() {}

  initExercise() {}

  addExercise() {
    const details = this.workoutForm.controls.exercises as FormArray;
    details.push(
      this.fb.group({
        exerciseName: "",
        description: "",
        sets: "",
        reps: ""
      })
    );
  }

  getExercises(form) {
    return form.controls.exercises.controls;
  }

  submitWorkout(form) {
    console.log(this.workoutForm);
  }
}
