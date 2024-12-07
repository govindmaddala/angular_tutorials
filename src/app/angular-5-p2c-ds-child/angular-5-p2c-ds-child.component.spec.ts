import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular5P2cDsChildComponent } from './angular-5-p2c-ds-child.component';

describe('Angular5P2cDsChildComponent', () => {
  let component: Angular5P2cDsChildComponent;
  let fixture: ComponentFixture<Angular5P2cDsChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Angular5P2cDsChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Angular5P2cDsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
