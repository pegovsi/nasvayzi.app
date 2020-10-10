import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatsBlockComponent } from './chats-block.component';

describe('ChatsBlockComponent', () => {
  let component: ChatsBlockComponent;
  let fixture: ComponentFixture<ChatsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatsBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
