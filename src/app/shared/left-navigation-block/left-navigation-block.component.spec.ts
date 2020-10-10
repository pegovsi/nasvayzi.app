import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftNavigationBlockComponent } from './left-navigation-block.component';

describe('LeftNavigationBlockComponent', () => {
  let component: LeftNavigationBlockComponent;
  let fixture: ComponentFixture<LeftNavigationBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftNavigationBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftNavigationBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
