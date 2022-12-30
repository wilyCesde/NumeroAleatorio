import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NumeroAleatorio';



  randomNumber: number = Math.floor(Math.random() * 10000);

  generateRandomNumber() {
    while (true) {
      this.randomNumber = Math.floor(Math.random() * 100001);
      if (this.randomNumber >= 1000 && this.randomNumber < 10000) {
        break;
      }
    }
  }
  ngOnInit() {
    this.generateRandomNumber();
  }


}
