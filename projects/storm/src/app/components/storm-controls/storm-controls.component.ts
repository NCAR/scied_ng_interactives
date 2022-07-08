import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { UntypedFormGroup, UntypedFormBuilder } from "@angular/forms";
import { TranslateService } from '@ngx-translate/core';

interface StormValues {
  highLevelTemperature: number;
  humidity: number;
  lowLevelTemperature: number;
}

@Component({
  selector: "app-storm-controls",
  templateUrl: "./storm-controls.component.html",
  styleUrls: ["./storm-controls.component.scss"]
})
export class StormControlsComponent implements OnInit {
  @Output() checkValues = new EventEmitter<StormValues>();
  @Output() reset = new EventEmitter<boolean>();
  stormValues: StormValues;
  stormForm: UntypedFormGroup;

  constructor(private formBuilder: UntypedFormBuilder,
    private translate: TranslateService) {
    this.stormForm = this.formBuilder.group({
      highLevelTemperature: [2],
      humidity: [2],
      lowLevelTemperature: [2]
    });
  }

  checkStorm() {
    this.checkValues.emit({
      highLevelTemperature: this.stormForm.controls.highLevelTemperature.value,
      humidity: this.stormForm.controls.humidity.value,
      lowLevelTemperature: this.stormForm.controls.lowLevelTemperature.value
    });
  }

  resetStorm() {
    this.stormForm.controls.highLevelTemperature.setValue(2);
    this.stormForm.controls.humidity.setValue(2);
    this.stormForm.controls.lowLevelTemperature.setValue(2);
    this.reset.emit(true);
  }

  ngOnInit() {}
}
