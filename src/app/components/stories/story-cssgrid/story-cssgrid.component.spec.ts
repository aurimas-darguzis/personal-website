import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryCssgridComponent } from './story-cssgrid.component';

describe('StoryCssgridComponent', () => {
  let component: StoryCssgridComponent;
  let fixture: ComponentFixture<StoryCssgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryCssgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryCssgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
