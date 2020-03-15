import { Component } from '@angular/core';
import { faCoffee, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'midxa-landing';
  faGlobe = faGlobe;
  userSetting = {}


  constructor(
    public translate: TranslateService,
    public storage: Storage) {
    let userData = JSON.parse(localStorage.getItem('userSetting'));
    if (userData == null) {
      localStorage.setItem('userSetting', JSON.stringify(this.userSetting))
      translate.addLangs(['en', 'id']);
      const browserLang = translate.getBrowserLang();
      translate.use(browserLang.match(/en|id/) ? browserLang : 'en');
    } else {
      translate.addLangs(['en', 'id']);
      translate.use(userData.lng)
    }
  }


  public changeLanguage(language: string) {
    console.log('start');
    this.userSetting.lng = language;
    localStorage.setItem('userSetting', JSON.stringify(this.userSetting))
    this.translate.use(language)
  }

  public get currentLanguage(): string {
    return this.translate.currentLang;
  }
}
