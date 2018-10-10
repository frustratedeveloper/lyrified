import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LyricFeedComponent } from './lyric-feed.component';

describe('LyricFeedComponent', () => {
  let component: LyricFeedComponent;
  let fixture: ComponentFixture<LyricFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LyricFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LyricFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
