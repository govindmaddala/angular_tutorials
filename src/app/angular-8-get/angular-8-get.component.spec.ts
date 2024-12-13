import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular8GetComponent } from './angular-8-get.component';

describe('Angular8GetComponent', () => {
  let component: Angular8GetComponent;
  let fixture: ComponentFixture<Angular8GetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Angular8GetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Angular8GetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
