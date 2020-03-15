import { Component } from '@angular/core';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';

import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'midxa-landing';
  faGlobe = faGlobe;
  userSetting = {}

  options: AnimationOptions = {
    path: '../assets/lottie/17252-colorful-confetti.json',
  };
 
  animationItem: AnimationItem;

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

    console.log(this.options);
    
  }

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }


  public changeLanguage(language: string) {
    console.log('start');
    this.userSetting["lng"] = language;
    localStorage.setItem('userSetting', JSON.stringify(this.userSetting))
    this.translate.use(language)
  }

  public get currentLanguage(): string {
    return this.translate.currentLang;
  }
}
