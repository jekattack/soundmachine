import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'soundmachine-web-app';

  constructor(){}

  emojis: string[] = [
    "thumbs-up",
    "heart",
    "laughing",
    "surprised",
    "unhappy",
    "angry",
    "applause",
    "raised-hand"
  ];

}
