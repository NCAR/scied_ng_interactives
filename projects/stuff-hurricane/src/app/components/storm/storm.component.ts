import { Component, OnInit, OnDestroy } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { BreakpointObserver, BreakpointState } from "@angular/cdk/layout";
import { Subscription } from "rxjs";
import { TranslateService } from '@ngx-translate/core';
import { MatRadioChange } from '@angular/material/radio';

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
  currentLang:any = 'en';
  feedback:any = {
    "tryagain": "thunderstorm.feedback.tryagain",
    "small": "thunderstorm.feedback.small",
    "medium": "thunderstorm.feedback.medium",
    "large": "thunderstorm.feedback.large"
  };

  constructor(
    private snackBar: MatSnackBar,
    private breakpointObserver: BreakpointObserver,
    private translate: TranslateService
  ) {
    this.currentLang = this.translate.currentLang;
  }


  changeLanguage($event: MatRadioChange) {
      this.translate.use($event.value.match(/en|es|fr/) ? $event.value : 'en');

  }
  openSnackBar(message: string) {
    this.getTranslation(message);
  }

  playAudio(audioFile: string) {
    if(this.currentLang == 'en'){
      const audio = new Audio();
      audio.src = `/assets/audio/${audioFile}`;
      audio.load();
      audio.play();
    }
  }

  resetStorm() {
    this.backgroundImage = "storm-bg.png";
  }

  smallThunderstorm() {
    this.backgroundImage = this.smallWindow
      ? "thunderstorm_small_sm.gif"
      : "thunderstorm_small.gif";
    this.openSnackBar( this.feedback.small );
    this.playAudio("small_storm_"+this.translate.currentLang+".mp3");
  }

  mediumThunderstorm() {
    this.backgroundImage = this.smallWindow
      ? "thunderstorm_med_sm.gif "
      : "thunderstorm_med.gif";
    this.openSnackBar( this.feedback.medium );
    this.playAudio("medium_storm_"+this.translate.currentLang+".mp3");
  }

  largeThunderstorm() {
    this.backgroundImage = this.smallWindow
      ? "thunderstorm_large_sm.gif"
      : "thunderstorm_large.gif";
    this.openSnackBar( this.feedback.large );
    this.playAudio("large_storm_"+this.translate.currentLang+".mp3");
  }

  noStorm() {
    this.backgroundImage = this.smallWindow
      ? "storm-bg-sm.png"
      : "storm-bg.png";
    this.openSnackBar(this.feedback.tryagain );
    this.playAudio("try_again_"+this.translate.currentLang+".mp3");
  }
  getTranslation(val){
    this.translate.get(val).subscribe((res: string) => {
        this.snackBar.open(res, "", { duration: 10000 });
    });
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
