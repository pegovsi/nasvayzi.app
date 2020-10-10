import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideGroupComponent } from './aside-group.component';

describe('AsideGroupComponent', () => {
  let component: AsideGroupComponent;
  let fixture: ComponentFixture<AsideGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
