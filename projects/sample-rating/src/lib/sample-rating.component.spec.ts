import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleRatingComponent } from './sample-rating.component';

describe('SampleRatingComponent', () => {
  let component: SampleRatingComponent;
  let fixture: ComponentFixture<SampleRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
