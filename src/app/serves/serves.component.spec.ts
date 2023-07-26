import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServesComponent } from './serves.component';

describe('ServesComponent', () => {
  let component: ServesComponent;
  let fixture: ComponentFixture<ServesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
