import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MydataComponent } from './mydata.component';

describe('MydataComponent', () => {
  let component: MydataComponent;
  let fixture: ComponentFixture<MydataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MydataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MydataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
