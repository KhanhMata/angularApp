import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsInLeagueComponent } from './teams-in-league.component';

describe('TeamsInLeagueComponent', () => {
  let component: TeamsInLeagueComponent;
  let fixture: ComponentFixture<TeamsInLeagueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsInLeagueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsInLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
