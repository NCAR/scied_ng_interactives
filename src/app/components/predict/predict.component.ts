import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { Path } from "src/app/models/path";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Subscription } from "rxjs";
import { MatSnackBar } from "@angular/material/snack-bar";
import { PathService } from "src/app/services";
import { BreakpointObserver, BreakpointState } from "@angular/cdk/layout";
import { HurricanePathComponent } from "../hurricane-path/hurricane-path.component";

@Component({
  selector: "app-predict",
  templateUrl: "./predict.component.html",
  styleUrls: ["./predict.component.scss"]
})
export class PredictComponent implements OnInit, OnDestroy {
  @ViewChild(HurricanePathComponent)
  hurricanePathComponent: HurricanePathComponent;
  hurricaneForm: FormGroup;
  cityForm: FormGroup;
  path: Path;
  showWinds = false;
  windsImage: string;
  windsOpacity: number;
  showLow = {
    1: false,
    2: false,
    3: false,
    4: false
  };
  showHigh = {
    1: false,
    2: false,
    3: false,
    4: false
  };
  selectedLow: number;
  selectedHigh: number;
  subscriptions: Subscription[] = [];
  selectedCity: number;
  selectedHurricane: string;
  smallWindow = false;
  showWindsToggle = false;
  hurricaneHit = {
    daniel: false,
    elizabeth: false,
    marianne: false,
    stephen: false
  };
  audio: HTMLAudioElement;

  constructor(
    private pathService: PathService,
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private breakpointObserver: BreakpointObserver
  ) {
    this.hurricaneForm = this.formBuilder.group({
      hurricane: [""]
    });
    this.cityForm = this.formBuilder.group({
      city: [""]
    });
  }

  resetHurricaneHit() {
    this.hurricaneHit = {
      daniel: false,
      elizabeth: false,
      marianne: false,
      stephen: false
    };
  }

  selectCity(city: number) {
    this.cityForm.controls.city.setValue(city);
  }

  selectLow(low: number) {
    this.selectedLow = low;
    for (const num of [1, 2, 3, 4]) {
      this.showLow[num] = num === low ? true : false;
    }
  }

  selectHigh(high: number) {
    this.selectedHigh = high;
    for (const num of [1, 2, 3, 4]) {
      this.showHigh[num] = num === high ? true : false;
    }
  }

  setWinds(hurricane: string) {
    this.hurricanePathComponent.resetHurricane();
    this.resetHurricaneHit();
    this.showWinds = true;
    this.windsOpacity = 0.6;
    this.selectedHurricane = hurricane;
    this.showWindsToggle = true;
    if (hurricane === "daniel") {
      this.windsImage = "url(/sites/default/files/interactives/predict-hurricane/assets/images/winds_1_1.png)";
      this.selectLow(1);
      this.selectHigh(1);
    } else if (hurricane === "elizabeth") {
      this.windsImage = "url(/sites/default/files/interactives/predict-hurricane/assets/images/winds_2_1.png)";
      this.selectLow(2);
      this.selectHigh(1);
    } else if (hurricane === "marianne") {
      this.windsImage = "url(/sites/default/files/interactives/predict-hurricane/assets/images/winds_2_4.png)";
      this.selectLow(2);
      this.selectHigh(4);
    } else if (hurricane === "stephen") {
      this.windsImage = "url(/sites/default/files/interactives/predict-hurricane/assets/images/winds_4_3.png)";
      this.selectLow(4);
      this.selectHigh(3);
    }
  }

  toggleWinds() {
    this.showWinds = !this.showWinds;
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, "", { duration: 3000 });
  }

  playAudio(audioFile: string) {
    this.audio = new Audio();
    this.audio.src = `/sites/default/files/interactives/predict-hurricane/assets/audio/${audioFile}`;
    this.audio.load();
    this.audio.play();
  }

  predict() {
    this.resetHurricaneHit();
    if (this.selectedLow && this.selectedHigh) {
      this.playAudio("wind.mp3");
      this.path = this.pathService.getCityPath(
        this.smallWindow,
        this.selectedHurricane
      );
    } else {
      this.openSnackBar("You must select a hurricane to proceed.");
    }
  }

  pathComplete() {
    this.hurricaneHit[this.selectedHurricane] = true;
    this.audio.pause();
  }

  tryAgain() {
    this.selectLow(0);
    this.selectHigh(0);
    this.resetHurricaneHit();
    this.showWinds = false;
    this.showWindsToggle = false;
    this.hurricaneForm.reset();
    this.cityForm.reset();
    this.hurricanePathComponent.resetHurricane();
  }

  ngOnInit() {
    this.subscriptions.push(
      this.cityForm.controls.city.valueChanges.subscribe(
        value => (this.selectedCity = parseInt(value, 10))
      )
    );
    this.subscriptions.push(
      this.breakpointObserver
        .observe(["(max-width: 900px)"])
        .subscribe((state: BreakpointState) => {
          if (state.matches) {
            this.smallWindow = true;
          } else {
            this.smallWindow = false;
          }
        })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription: Subscription) =>
      subscription.unsubscribe()
    );
  }
}
