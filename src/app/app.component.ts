import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import _1_ManualComponent from './_1_ManualComponent/_1_ManualComponent.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, _1_ManualComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_tutorials';
}
