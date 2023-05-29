import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemDetailsComponent } from './todo-item-details.component';

describe('TodoItemDetailsComponent', () => {
  let component: TodoItemDetailsComponent;
  let fixture: ComponentFixture<TodoItemDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoItemDetailsComponent]
    });
    fixture = TestBed.createComponent(TodoItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
