import { Component } from '@angular/core';
import { faCoffee, faGlobe } from '@fortawesome/free-solid-svg-icons';
import {TranslateService} from '@ngx-translate/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'midxa-landing';
  faGlobe = faGlobe;
  
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'id']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|id/) ? browserLang : 'en');
  }

  public changeLanguage(language: string){
   this.translate.use(language)
  }

  public get currentLanguage(): string {
   return this.translate.currentLang;
  }
}
