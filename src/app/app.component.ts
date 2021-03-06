import { Component, Inject } from '@angular/core';
import { APP_VERSION } from '../tokens/app-version';

import(
  /* webpackPreload: true */
  /* webpackChunkName: "large_files" */
  './largefiles/index'
).then(() => {
  console.log('imported files');
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(@Inject(APP_VERSION) public appVersion: string) {}
}
