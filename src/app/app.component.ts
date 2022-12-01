import {Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'scrambly-app';
  open: boolean = false;
  isLight: boolean = false

  constructor(){}


  openSide() {
    this.open = !this.open;
  }
  toggleTheme() {
    this.isLight = !this.isLight
  }


  ngOnInit(): void {
  }

}
