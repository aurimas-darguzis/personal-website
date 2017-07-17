import { ShowreelService } from './../showreel.service';
import { MaterialModule } from '@angular/material';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFirstAppComponent } from './angular-first-app.component';

describe('AngularFirstAppComponent', () => {
  let component: AngularFirstAppComponent;
  let fixture: ComponentFixture<AngularFirstAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule ],
      declarations: [ AngularFirstAppComponent ],
      providers: [ ShowreelService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularFirstAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
