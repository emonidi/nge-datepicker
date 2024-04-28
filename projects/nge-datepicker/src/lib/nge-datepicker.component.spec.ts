import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDatepickerComponent } from './nge-datepicker.component';

describe('NgDatepickerComponent', () => {
  let component: NgDatepickerComponent;
  let fixture: ComponentFixture<NgDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgDatepickerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
