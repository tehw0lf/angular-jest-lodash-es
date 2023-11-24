import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import cloneDeep from 'lodash-es/cloneDeep';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, NxWelcomeComponent, RouterTestingModule],
    }).compileComponents();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Welcome angular-jest-lodash-es'
    );
  });

  it(`should have as title 'angular-jest-lodash-es'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-jest-lodash-es');
  });

  it('should be able to use cloneDeep inside the component class', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    const value = {
      a: 1,
      b: {
        c: 3,
      },
    };

    expect(app.cloneMe(value)).toEqual(value);
  });

  it('should be able to use cloneDeep inside the test class', () => {
    const a = {
      b: 2,
      c: {
        d: 4,
      },
    };
    const b = cloneDeep(a);

    expect(b).toEqual(a);
  });
});
