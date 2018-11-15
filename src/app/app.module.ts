import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyLibModule } from 'my-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyLibModule.forRoot(
      {
        myToken: 'my token',
        myToken2: 'my token2',
        myToken3: 'my token3'
      },
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
