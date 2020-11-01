import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmovieComponent } from './smovie.component';

describe('SmovieComponent', () => {
  let component: SmovieComponent;
  let fixture: ComponentFixture<SmovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
