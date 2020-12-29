import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Counter App With Angular Js';
  count:number = 0;

  increase = () => {
    if(this.count === 10){
      alert("cant increase above 10")
    }
    else{
      this.count = this.count + 1;
    }
  }
  decrease = () => {
    if(this.count === 0){
      alert('you can not decrease in negative')
    }
    else{
      this.count = this.count - 1;
    }
  }
  reset = () => {
    this.count = 0;
  }

}
