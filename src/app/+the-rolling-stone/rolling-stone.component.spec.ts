import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollingStoneComponent } from './rolling-stone.component';

describe('RollingStoneComponent', () => {
  let component: RollingStoneComponent;
  let fixture: ComponentFixture<RollingStoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollingStoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollingStoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
