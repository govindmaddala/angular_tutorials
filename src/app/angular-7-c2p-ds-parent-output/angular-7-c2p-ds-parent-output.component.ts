import { Component } from '@angular/core';
import { Angular7C2pDsChildOutputComponent } from '../angular-7-c2p-ds-child-output/angular-7-c2p-ds-child-output.component';

@Component({
  selector: 'app-angular-7-c2p-ds-parent-output',
  imports: [Angular7C2pDsChildOutputComponent],
  templateUrl: './angular-7-c2p-ds-parent-output.component.html',
  styleUrl: './angular-7-c2p-ds-parent-output.component.css'
})
export class Angular7C2pDsParentOutputComponent {
  msgFromChild2Parent: string | undefined;
  getMsgOnEvent = ($event: any)=>{
    this.msgFromChild2Parent = $event;
  }
}
