import { Component } from '@angular/core';
import { Angular5P2cDsChildComponent } from '../angular-5-p2c-ds-child/angular-5-p2c-ds-child.component';

@Component({
  selector: 'app-angular-5-p2c-ds-parent',
  imports: [Angular5P2cDsChildComponent],
  templateUrl: './angular-5-p2c-ds-parent.component.html',
  styleUrl: './angular-5-p2c-ds-parent.component.css'
})

export class Angular5P2cDsParentComponent {
  msgFromP2C: string = "Message from parent(Angular5P2cDsParentComponent) to child (Angular5P2cDsChildComponent)"
}
