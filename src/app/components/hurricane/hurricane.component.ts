import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Path } from "src/app/models/path";
import { PathService } from "src/app/services";
import { HurricanePathComponent } from "../hurricane-path/hurricane-path.component";

interface DisableTemp {
  1: boolean;
  2: boolean;
  3: boolean;
  4: boolean;
}

@Component({
  selector: "app-hurricane",
  templateUrl: "./hurricane.component.html",
  styleUrls: ["./hurricane.component.scss"]
})
export class HurricaneComponent implements OnInit {
  @ViewChild(HurricanePathComponent)
  hurricanePathComponent: HurricanePathComponent;
  disableLowTemp: DisableTemp;
  disableHighTemp: DisableTemp;
  disableTemperatureSelection = false;
  locked = false;
  selectedLow: number;
  selectedHigh: number;
  showWinds = false;
  showWindsToggle = false;
  windsImage: string;
  windsOpacity: number;
  path: Path;
  audio: HTMLAudioElement;

  constructor(
    private snackBar: MatSnackBar,
    private pathService: PathService
  ) {}

  ngOnInit() {
    this.resetTemps();
  }

  resetTemps() {
    this.disableLowTemp = {
      1: false,
      2: false,
      3: false,
      4: false
    };
    this.disableHighTemp = {
      1: false,
      2: false,
      3: false,
      4: false
    };
    this.selectedHigh = null;
    this.selectedLow = null;
  }

  selectLow(low: number): void {
    if (!this.disableTemperatureSelection) {
      const numbers = [1, 2, 3, 4];
      this.selectedLow = low;
      for (const num of numbers) {
        this.disableLowTemp[num] = num === low ? false : true;
      }
    }
  }

  selectHigh(high: number): void {
    if (!this.disableTemperatureSelection) {
      const numbers = [1, 2, 3, 4];
      this.selectedHigh = high;
      for (const num of numbers) {
        this.disableHighTemp[num] = num === high ? false : true;
      }
    }
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, "", { duration: 7000 });
  }

  playAudio(audioFile: string) {
    this.audio = new Audio();
    this.audio.src = `/sites/default/files/interactives/predict-hurricane/assets/audio/${audioFile}`;
    this.audio.load();
    this.audio.play();
  }

  forecast() {
    if (this.selectedLow && this.selectedHigh) {
      this.playAudio("wind.mp3");
      this.windsImage = `url(/sites/default/files/interactives/predict-hurricane/assets/images/winds_${this.selectedLow}_${this.selectedHigh}.png)`;
      this.disableTemperatureSelection = true;
      this.showWindsToggle = true;
      this.showWinds = true;
      this.windsOpacity = 0.6;
      this.path = this.pathService.getPath(this.selectedLow, this.selectedHigh);
    } else {
      this.openSnackBar("You must select an L and an H to proceed.");
    }
  }

  pathComplete() {
    this.audio.pause();
  }

  tryAgain(): void {
    this.resetTemps();
    this.showWinds = false;
    this.showWindsToggle = false;
    this.disableTemperatureSelection = false;
    this.hurricanePathComponent.resetHurricane();
  }

  toggleWinds(): void {
    this.showWinds = !this.showWinds;
  }
}
