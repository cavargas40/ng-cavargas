import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { languageConfiguration } from './core/config/translations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translateService: TranslateService) {
    languageConfiguration(this.translateService);
  }
}
