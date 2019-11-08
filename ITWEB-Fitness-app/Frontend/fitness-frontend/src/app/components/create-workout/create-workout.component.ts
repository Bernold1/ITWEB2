import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-create-workout",
  templateUrl: "./create-workout.component.html",
  styleUrls: ["./create-workout.component.css"]
})
export class CreateWorkoutComponent implements OnInit {
  public formGroup = new FormGroup({
    visibility: new FormControl("public")
  });
  constructor() {}

  ngOnInit() {}
}
