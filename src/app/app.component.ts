import { Component } from '@angular/core';
import { faCoffee, faGlobe } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'midxa-landing';
  faGlobe = faGlobe;

}
