import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular5P2cDsParentComponent } from './angular-5-p2c-ds-parent.component';

describe('Angular5P2cDsParentComponent', () => {
  let component: Angular5P2cDsParentComponent;
  let fixture: ComponentFixture<Angular5P2cDsParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Angular5P2cDsParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Angular5P2cDsParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
