import { Component, VERSION } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  message = "Server Name is: "
  serverName = '';

  onClickButton(){
    this.message = this.message+this.serverName
  }
  //onInput(event: any) {
  //this.serverName = event.target.value;
  //}
}
