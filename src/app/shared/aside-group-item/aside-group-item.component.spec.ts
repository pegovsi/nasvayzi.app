import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideGroupItemComponent } from './aside-group-item.component';

describe('AsideGroupItemComponent', () => {
  let component: AsideGroupItemComponent;
  let fixture: ComponentFixture<AsideGroupItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideGroupItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideGroupItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
