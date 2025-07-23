import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'Code Step By Step';
  name = "Anil Sidhu";
  data = 100;
  data2 = 200;
  user1 = "Anil";
  user2 = "John"
}
