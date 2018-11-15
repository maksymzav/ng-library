import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';

export const MY_TOKEN = new InjectionToken('my.token');
export const MY_TOKEN2 = new InjectionToken('my.token2');
export const MY_TOKEN3 = new InjectionToken('my.token3');

@NgModule({
  declarations: [MyLibComponent],
  imports: [],
  exports: [MyLibComponent]
})
export class MyLibModule {
  static forRoot({myToken, myToken2, myToken3}): ModuleWithProviders {
    return {
      ngModule: MyLibModule,
      providers: [
        {provide: MY_TOKEN, useValue: myToken},
        {provide: MY_TOKEN2, useValue: myToken2},
        {provide: MY_TOKEN3, useValue: myToken3},
      ]
    };
  }
}
