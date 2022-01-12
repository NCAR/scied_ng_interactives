import { Injectable } from "@angular/core";
import { Path } from "../models/path";

interface Coordinate {
  x: number;
  y: number;
}

@Injectable({
  providedIn: "root"
})
export class PathService {
  paths = {
    1: {
      1: [
        { x: -22.595, y: 19.44 },
        { x: -63.23, y: 2.27 },
        { x: -53.31, y: -50.5 }
      ],
      2: [
        { x: -26.28, y: 2.83 },
        { x: -42.7, y: 1.53 },
        { x: -45.41, y: -47.1 }
      ],
      3: [
        { x: -16.33, y: 17.13 },
        { x: -61.3, y: 35.26 },
        { x: -46.46, y: -52.64 }
      ],
      4: [
        { x: -36.61, y: 18.39 },
        { x: -57.42, y: -59.95 },
        { x: -9.84, y: -87.91 }
      ]
    },
    2: {
      1: [
        { x: -37.21, y: 13.6 },
        { x: -57.42, y: -23.43 },
        { x: -39.37, y: -64.0 }
      ],
      2: [
        { x: -46.53, y: 22.92 },
        { x: -39.75, y: -29.47 },
        { x: -27.44, y: -97.98 }
      ],
      3: [
        { x: -31.92, y: 31.74 },
        { x: -75.54, y: 20.4 },
        { x: -15.81, y: -115.37 }
      ],
      4: [
        { x: -39.15, y: 29.72 },
        { x: -47.13, y: -60.2 },
        { x: 0.89, y: -92.7 }
      ]
    },
    3: {
      1: [
        { x: -1.72, y: -1.51 },
        { x: -38.93, y: 33.75 },
        { x: -49.52, y: -47.86 }
      ],
      2: [
        { x: -1.34, y: 5.29 },
        { x: -36.54, y: 15.11 },
        { x: -43.92, y: -44.08 }
      ],
      3: [
        { x: -27.07, y: 26.7 },
        { x: -50.41, y: 25.19 },
        { x: -46.61, y: -47.86 }
      ],
      4: [
        { x: -53.39, y: 30.73 },
        { x: -41.09, y: -114.36 },
        { x: 0.45, y: -94.71 }
      ]
    },
    4: {
      1: [
        { x: -15.21, y: 11.08 },
        { x: -31.54, y: -10.33 },
        { x: -36.32, y: -65.99 }
      ],
      2: [
        { x: -17.08, y: 11.08 },
        { x: -26.92, y: -10.33 },
        { x: -34.0, y: -74.56 }
      ],
      3: [
        { x: -27.07, y: 31.23 },
        { x: -41.83, y: 29.97 },
        { x: -30.87, y: -89.91 }
      ],
      4: [
        { x: -30.5, y: 29.22 },
        { x: -34.23, y: -86.15 },
        { x: -8.2, y: -92.44 }
      ]
    }
  };

  cityPaths = {
    daniel: [
      { x: -9.84, y: 16.62 },
      { x: -57.87, y: 19.9 },
      { x: -53.32, y: -47.86 }
    ],
    elizabeth: [
      { x: -20.51, y: 11.34 },
      { x: -47.8, y: -1.01 },
      { x: -43.03, y: -34.01 }
    ],
    marianne: [
      { x: -50.48, y: 35.77 },
      { x: -32.21, y: -79.85 },
      { x: 1.42, y: -91.69 }
    ],
    stephen: [
      { x: -26.62, y: 43.83 },
      { x: -43.92, y: 9.32 },
      { x: -30.87, y: -87.15 }
    ]
  };

  constructor() {}

  getPath(low: number, high: number): Path {
    return {
      percentageChanges: this.paths[low][high]
    };
  }

  getCityPath(smallWindow: boolean, hurricane: string): Path {
    return {
      percentageChanges: this.cityPaths[hurricane]
    };
  }
}
