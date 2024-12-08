import { AfterViewInit, Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Angular6C2pDsChildViewchildComponent } from '../angular-6-c2p-ds-child-viewchild/angular-6-c2p-ds-child-viewchild.component';

@Component({
  selector: 'app-angular-6-c2p-ds-parent-viewchild',
  templateUrl: './angular-6-c2p-ds-parent-viewchild.component.html',
  styleUrls: ['./angular-6-c2p-ds-parent-viewchild.component.css'],
  imports: [Angular6C2pDsChildViewchildComponent]
})
export class Angular6C2pDsParentViewchildComponent implements AfterViewInit {
  @ViewChild(Angular6C2pDsChildViewchildComponent, { static: false }) child: any;
  childName: string | undefined;
  childAge: number | undefined;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    if (this.child) {
      this.childAge = this.child.age;
      this.childName = this.child.name;
      this.cdr.detectChanges(); // Notify Angular to re-run change detection
    }
  }
}
