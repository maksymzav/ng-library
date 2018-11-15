import { Inject, Injectable } from '@angular/core';
import { MY_TOKEN, MY_TOKEN2, MY_TOKEN3 } from './my-lib.module';

@Injectable({
  providedIn: 'root'
})
export class MyLibService {

  constructor(@Inject(MY_TOKEN) protected myToken, @Inject(MY_TOKEN2) protected myToken2, @Inject(MY_TOKEN3) protected myToken3) {
  }

  getMyToken() {
    return this.myToken;
  }

  getMyToken2() {
    return this.myToken2;
  }

  getMyToken3() {
    return this.myToken3;
  }
}
