import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular6C2pDsChildViewchildComponent } from './angular-6-c2p-ds-child-viewchild.component';

describe('Angular6C2pDsChildViewchildComponent', () => {
  let component: Angular6C2pDsChildViewchildComponent;
  let fixture: ComponentFixture<Angular6C2pDsChildViewchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Angular6C2pDsChildViewchildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Angular6C2pDsChildViewchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
