import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReloadService {
  reload: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  emitReloadEvent(val) {
    this.reload.emit(val);
  }

  getReloadEmitter() {
    return this.reload;
  }
}
