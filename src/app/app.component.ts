import { Component, OnInit } from '@angular/core';
import { MyLibService } from 'my-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  myToken: string;
  myToken2: string;
  myToken3: string;

  constructor(protected myLibService: MyLibService) {
  }

  ngOnInit() {
    this.myToken = this.myLibService.getMyToken();
    this.myToken2 = this.myLibService.getMyToken2();
    this.myToken3 = this.myLibService.getMyToken3();
    console.log(this.myToken, this.myToken2, this.myToken3);
  }
}
