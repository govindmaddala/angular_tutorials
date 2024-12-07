import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular4DataBindingComponent } from './angular-4-data-binding.component';

describe('Angular4DataBindingComponent', () => {
  let component: Angular4DataBindingComponent;
  let fixture: ComponentFixture<Angular4DataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Angular4DataBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Angular4DataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
