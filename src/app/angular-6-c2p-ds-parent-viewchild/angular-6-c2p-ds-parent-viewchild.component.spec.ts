import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular6C2pDsParentViewchildComponent } from './angular-6-c2p-ds-parent-viewchild.component';

describe('Angular6C2pDsParentViewchildComponent', () => {
  let component: Angular6C2pDsParentViewchildComponent;
  let fixture: ComponentFixture<Angular6C2pDsParentViewchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Angular6C2pDsParentViewchildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Angular6C2pDsParentViewchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
