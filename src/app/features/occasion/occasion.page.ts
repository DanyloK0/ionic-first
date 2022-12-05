import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-occasion',
  templateUrl: './occasion.page.html',
  styleUrls: ['./occasion.page.scss'],
})
export class OccasionPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;
  constructor() { }
  scrollToBottom() {
    // Passing a duration to the method makes it so the scroll slowly
    // goes to the bottom instead of instantly
    this.content.scrollToBottom(500);
  }

  ngOnInit() {
  }

}
