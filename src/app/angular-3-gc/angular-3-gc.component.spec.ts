import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular3GCComponent } from './angular-3-gc.component';

describe('Angular3GCComponent', () => {
  let component: Angular3GCComponent;
  let fixture: ComponentFixture<Angular3GCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Angular3GCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Angular3GCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
