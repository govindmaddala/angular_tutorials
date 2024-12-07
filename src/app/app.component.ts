import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Angular3GCComponent } from './angular-3-gc/angular-3-gc.component';
import { Angular4DataBindingComponent } from './angular-4-data-binding/angular-4-data-binding.component';
import { Angular5P2cDsParentComponent } from './angular-5-p2c-ds-parent/angular-5-p2c-ds-parent.component';
import { _1_ManualComponent } from './angular-1-ManualComponent/_1_ManualComponent.component';
import { _2_ManualSeparate } from './angular-2-ManualSeparate/_2_ManualSeparate.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, _1_ManualComponent, _2_ManualSeparate, Angular3GCComponent, Angular4DataBindingComponent, Angular5P2cDsParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_tutorials';
}
