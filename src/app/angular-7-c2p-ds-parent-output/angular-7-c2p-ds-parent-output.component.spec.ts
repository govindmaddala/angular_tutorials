import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular7C2pDsParentOutputComponent } from './angular-7-c2p-ds-parent-output.component';

describe('Angular7C2pDsParentOutputComponent', () => {
  let component: Angular7C2pDsParentOutputComponent;
  let fixture: ComponentFixture<Angular7C2pDsParentOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Angular7C2pDsParentOutputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Angular7C2pDsParentOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
