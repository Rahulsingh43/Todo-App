import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTodoComponent } from './set-todo.component';

describe('SetTodoComponent', () => {
  let component: SetTodoComponent;
  let fixture: ComponentFixture<SetTodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetTodoComponent]
    });
    fixture = TestBed.createComponent(SetTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
