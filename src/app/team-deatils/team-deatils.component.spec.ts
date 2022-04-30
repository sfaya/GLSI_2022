import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDeatilsComponent } from './team-deatils.component';

describe('TeamDeatilsComponent', () => {
  let component: TeamDeatilsComponent;
  let fixture: ComponentFixture<TeamDeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamDeatilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
