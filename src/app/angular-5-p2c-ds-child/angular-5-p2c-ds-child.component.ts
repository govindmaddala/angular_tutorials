import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-angular-5-p2c-ds-child',
  imports: [],
  templateUrl: './angular-5-p2c-ds-child.component.html',
  styleUrl: './angular-5-p2c-ds-child.component.css'
})
export class Angular5P2cDsChildComponent {

  @Input() fromParent: string | undefined;

}
