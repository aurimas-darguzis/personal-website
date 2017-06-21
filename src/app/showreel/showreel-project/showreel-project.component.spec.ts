import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowreelProjectComponent } from './showreel-project.component';

describe('ShowreelProjectComponent', () => {
  let component: ShowreelProjectComponent;
  let fixture: ComponentFixture<ShowreelProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowreelProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowreelProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
