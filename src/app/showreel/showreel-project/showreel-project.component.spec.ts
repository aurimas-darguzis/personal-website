import { ShowreelService } from './../showreel.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '@angular/material';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowreelProjectComponent } from './showreel-project.component';

describe('ShowreelProjectComponent', () => {
  let component: ShowreelProjectComponent;
  let fixture: ComponentFixture<ShowreelProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        RouterTestingModule
      ],
      declarations: [ ShowreelProjectComponent ],
      providers: [ ShowreelService ]
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
