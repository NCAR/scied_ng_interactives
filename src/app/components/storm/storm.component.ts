import { Component, OnInit, OnDestroy } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { BreakpointObserver, BreakpointState } from "@angular/cdk/layout";
import { Subscription } from "rxjs";

interface StormValues {
  highLevelTemperature: number;
  humidity: number;
  lowLevelTemperature: number;
}

@Component({
  selector: "app-storm",
  templateUrl: "./storm.component.html",
  styleUrls: ["./storm.component.scss"]
})
export class StormComponent implements OnInit, OnDestroy {
  smallWindow = false;
  backgroundImage = "storm-bg.png";
  layoutChanges: Subscription;

  constructor(
    private snackBar: MatSnackBar,
    private breakpointObserver: BreakpointObserver
  ) {}

  openSnackBar(message: string) {
    this.snackBar.open(message, "", { duration: 10000 });
  }

  playAudio(audioFile: string) {
    const audio = new Audio();
    audio.src = `/sites/default/files/interactives/storm/assets/audio/${audioFile}`;
    audio.load();
    audio.play();
  }

  resetStorm() {
    this.backgroundImage = "storm-bg.png";
  }

  smallThunderstorm() {
    this.backgroundImage = this.smallWindow
      ? "thunderstorm_small_sm.gif"
      : "thunderstorm_small.gif";
    this.openSnackBar(
      "Great job!  You've made a small storm.  Do you know how to make it larger?"
    );
    this.playAudio("small_storm.mp3");
  }

  mediumThunderstorm() {
    this.backgroundImage = this.smallWindow
      ? "thunderstorm_med_sm.gif "
      : "thunderstorm_med.gif";
    this.openSnackBar(
      "Great job!  You've made a medium sized storm.  Choose other combinations to make a larger or smaller thunderstorm."
    );
    this.playAudio("medium_storm.mp3");
  }

  largeThunderstorm() {
    this.backgroundImage = this.smallWindow
      ? "thunderstorm_large_sm.gif"
      : "thunderstorm_large.gif";
    this.openSnackBar(
      "Congratulations!  You've made a big storm!  Choose other combinations to make smaller thunderstorms."
    );
    this.playAudio("large_storm.mp3");
  }

  noStorm() {
    this.backgroundImage = this.smallWindow
      ? "storm-bg-sm.png"
      : "storm-bg.png";
    this.openSnackBar(
      "Try again.  Did you know that a thunderstorm needs warm, humid air near the ground and cooler air above?"
    );
    this.playAudio("try_again.mp3");
  }

  checkValues(stormValues: StormValues) {
    if (stormValues.highLevelTemperature === 1) {
      if (stormValues.humidity === 1) {
        if (stormValues.lowLevelTemperature === 1) {
          this.smallThunderstorm();
        } else if (stormValues.lowLevelTemperature === 2) {
          this.mediumThunderstorm();
        } else if (stormValues.lowLevelTemperature === 3) {
          this.largeThunderstorm();
        }
      } else if (stormValues.humidity === 2) {
        if (stormValues.lowLevelTemperature === 1) {
          this.noStorm();
        } else if (stormValues.lowLevelTemperature === 2) {
          this.smallThunderstorm();
        } else if (stormValues.lowLevelTemperature === 3) {
          this.mediumThunderstorm();
        }
      } else if (stormValues.humidity === 3) {
        this.noStorm();
      }
    } else if (stormValues.highLevelTemperature === 2) {
      if (stormValues.humidity === 1) {
        if (stormValues.lowLevelTemperature === 1) {
          this.noStorm();
        } else if (stormValues.lowLevelTemperature === 2) {
          this.smallThunderstorm();
        } else if (stormValues.lowLevelTemperature === 3) {
          this.mediumThunderstorm();
        }
      } else if (stormValues.humidity === 2) {
        if (stormValues.lowLevelTemperature === 1) {
          this.noStorm();
        } else if (stormValues.lowLevelTemperature === 2) {
          this.noStorm();
        } else if (stormValues.lowLevelTemperature === 3) {
          this.smallThunderstorm();
        }
      } else if (stormValues.humidity === 3) {
        this.noStorm();
      }
    } else if (stormValues.highLevelTemperature === 3) {
      if (stormValues.humidity === 1) {
        if (stormValues.lowLevelTemperature === 1) {
          this.noStorm();
        } else if (stormValues.lowLevelTemperature === 2) {
          this.noStorm();
        } else if (stormValues.lowLevelTemperature === 3) {
          this.smallThunderstorm();
        }
      } else if (stormValues.humidity === 2) {
        this.noStorm();
      } else if (stormValues.humidity === 3) {
        this.noStorm();
      }
    }
  }

  ngOnInit() {
    this.layoutChanges = this.breakpointObserver
      .observe(["(max-width: 900px)"])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.smallWindow = true;
        } else {
          this.smallWindow = false;
        }
      });
  }

  ngOnDestroy() {
    this.layoutChanges.unsubscribe();
  }
}
