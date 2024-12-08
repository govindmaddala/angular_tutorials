import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular7C2pDsChildOutputComponent } from './angular-7-c2p-ds-child-output.component';

describe('Angular7C2pDsChildOutputComponent', () => {
  let component: Angular7C2pDsChildOutputComponent;
  let fixture: ComponentFixture<Angular7C2pDsChildOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Angular7C2pDsChildOutputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Angular7C2pDsChildOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
