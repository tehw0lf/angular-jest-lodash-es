import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import cloneDeep from 'lodash-es/cloneDeep';

import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'angular-jest-lodash-es-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-jest-lodash-es';

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cloneMe(value: any): any {
    return cloneDeep(value);
  }
}
