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
    this.randomNumber = Math.floor(Math.random() * 10000);
  }
  ngOnInit() {
    this.generateRandomNumber();
  }


}
