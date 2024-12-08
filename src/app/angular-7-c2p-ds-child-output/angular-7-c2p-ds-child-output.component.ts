import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-angular-7-c2p-ds-child-output',
  imports: [],
  templateUrl: './angular-7-c2p-ds-child-output.component.html',
  styleUrl: './angular-7-c2p-ds-child-output.component.css'
})
export class Angular7C2pDsChildOutputComponent {
  childMsgForOutput: string = "Message from child to parent using output topic"
  @Output() msgEvent = new EventEmitter<string>();

  sendMsgFromC2POnClickEvent = ()=>{
    this.msgEvent.emit(this.childMsgForOutput);
  }
}
