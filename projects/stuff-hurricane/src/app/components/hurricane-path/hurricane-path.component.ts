import {
  Component,
  EventEmitter,
  OnInit,
  OnChanges,
  SimpleChange,
  ViewChild,
  ElementRef,
  Input,
  Output
} from "@angular/core";
import { gsap, TweenMax, TimelineLite, Linear } from "gsap";

import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { Path, PercentageChange } from "../models/path";

gsap.registerPlugin(MotionPathPlugin);

@Component({
  selector: "app-hurricane-path",
  templateUrl: "./hurricane-path.component.html",
  styleUrls: ["./hurricane-path.component.scss"]
})
export class HurricanePathComponent implements OnInit, OnChanges {
  @Input() path: Path;
  @Output() pathComplete = new EventEmitter<boolean>();
  @ViewChild("hurricaneContainer", { static: true })
  hurricaneContainer: ElementRef;
  @ViewChild("hurricane", { static: true }) hurricane: ElementRef;
  tl = new TimelineLite();
  tweens: Array<TweenMax> = [];

  constructor() {}

  ngOnInit() {
    this.tl.to(this.hurricane.nativeElement, 2, {
      rotation: "-=360",
      ease: Linear.easeNone,
      repeat: -1
    });
  }

  /**
   * Return hurricane div to starting point
   */
  resetHurricane() {
    for (let i = 0, length = this.tweens.length; i < length; i++) {
      this.tweens[i].pause(0);
    }
    this.tl.play();
  }

  /**
   * Calculate percentage change
   *
   * @param origin Starting coordinate
   * @param change Percentage change
   */
  calculateDiff(origin: number, change: number): number {
    const diff = (origin * Math.abs(change)) / 100;
    return change < 0 ? 0 - diff : diff;
  }

  /**
   * Create path based on percentage change from origin
   *
   * @param path Contains percentage changes from origin
   */
  makeCurve(path: Path): PercentageChange[] {
    // Starting point of hurricane
    const {
      x,
      y
    } = this.hurricaneContainer.nativeElement.getBoundingClientRect();
    const changes: PercentageChange[] = path.percentageChanges.map(
      percentageChange => ({
        x: this.calculateDiff(x, percentageChange["x"]),
        y: this.calculateDiff(y, percentageChange["y"])
      })
    );
    // Start of curve will always be 0, 0.  Other points are relative to this location.
    changes.unshift({ x: 0, y: 0 });
    return changes;
  }

  moveHurricane(path: Path) {
    this.resetHurricane();

    this.tweens.push(
      /*
      gsap.to(this.hurricaneContainer.nativeElement,
        {
          duration: 5,
          motionPath:{
            path:this.makeCurve(path)
          },
          ease: Linear.easeNone,
          onComplete: () => {
            this.tl.pause();
            this.pathComplete.emit(true);
          }
        })*/
      TweenMax.to(this.hurricaneContainer.nativeElement, {
        duration: 5,
        motionPath: {
          path: this.makeCurve(path),
          type: 'cubic'
        },
        ease: Linear.easeNone,
        onComplete: () => {
          this.tl.pause();
          this.pathComplete.emit(true);
        }
      })
    );
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    for (const propName in changes) {
      if (propName === "path" && !changes[propName].firstChange) {
        this.moveHurricane(changes[propName].currentValue);
      }
    }
  }
}
