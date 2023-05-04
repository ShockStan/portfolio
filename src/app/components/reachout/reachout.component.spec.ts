import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReachoutComponent } from './reachout.component';

describe('ReachoutComponent', () => {
  let component: ReachoutComponent;
  let fixture: ComponentFixture<ReachoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReachoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReachoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
