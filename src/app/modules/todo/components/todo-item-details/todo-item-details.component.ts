import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TodoApiService} from "../../../shared/services/todo-api.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../../shared/services/authentication.service";

@Component({
  selector: 'app-todo-item-details',
  templateUrl: './todo-item-details.component.html',
  styleUrls: ['./todo-item-details.component.scss']
})
export class TodoItemDetailsComponent implements OnInit {

  private authenticationService = inject(AuthenticationService);
  private activatedRoute = inject(ActivatedRoute);
  private todoApiService = inject(TodoApiService);
  private formBuilder = inject(FormBuilder);

  isUpserting = false;

  formGroup: FormGroup = this.formBuilder.group({
    id: this.formBuilder.control(null),
    todo: this.formBuilder.control(null, [Validators.required, Validators.minLength(10)]),
    completed: this.formBuilder.control(false, [Validators.required]),
    userId: this.formBuilder.control(this.authenticationService.currentUser?.id),
  });

  ngOnInit(): void {
    const itemId = this.activatedRoute.snapshot.paramMap.get("id");

    if (itemId !== 'add-new') {
      this.todoApiService
        .getById(Number(itemId))
        .subscribe({
          next: (todoItem) => {
            this.formGroup.patchValue(todoItem);
          },
          error: (errorResponse) => {
            console.log(`errorResponse`, errorResponse)
          }
        })
    }
  }

  upsertTodoItem() {

    if (this.formGroup.invalid) {
      return;
    }

    this.isUpserting = true;

    this.todoApiService.upsert(this.formGroup.value).subscribe({
      next: (response) => {

      },
      error: (errorResponse) => {
        console.log(`errorResponse`, errorResponse)
      }
    })


  }


}
