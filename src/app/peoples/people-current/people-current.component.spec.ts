import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleCurrentComponent } from './people-current.component';

describe('PeopleCurrentComponent', () => {
  let component: PeopleCurrentComponent;
  let fixture: ComponentFixture<PeopleCurrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleCurrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
