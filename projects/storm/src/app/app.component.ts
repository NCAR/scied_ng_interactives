import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Make a Thunderstorm';

  constructor(
  private translate: TranslateService){
    const browserLang = this.translate.getBrowserLang();
    this.translate.setDefaultLang('en');
    this.translate.use(browserLang.match(/en|es|fr/) ? browserLang : 'es');
  }
}
