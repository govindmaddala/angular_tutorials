import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import _1_ManualComponent from './_1_ManualComponent/_1_ManualComponent.component';
import _2_ManualSeparate from './_2_ManualSeparate/_2_ManualSeparate.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, _1_ManualComponent, _2_ManualSeparate],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_tutorials';
}
