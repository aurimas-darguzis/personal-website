import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryNodejsComponent } from './story-nodejs.component';

describe('StoryNodejsComponent', () => {
  let component: StoryNodejsComponent;
  let fixture: ComponentFixture<StoryNodejsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryNodejsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryNodejsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
