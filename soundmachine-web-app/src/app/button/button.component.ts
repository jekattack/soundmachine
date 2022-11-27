import { Component, Inject, inject, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent implements OnInit{

  @Input() emoji!: string;
  @Input() allSounds: string[] = []

  emojiName = '';
  emojiPath = '';
  soundPath = '';

  playSound(){
    console.log("test")
    let sound = new Audio();
    sound.src = this.soundPath;
    sound.load();
    sound.play();
  }

  ngOnInit(){
    this.emojiName = this.emoji;
    this.emojiPath = "../assets/" + this.emoji + ".png";
    this.soundPath = "../assets/sounds/" + this.emoji + ".mp3";
  }

}
