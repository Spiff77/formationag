import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PostService} from '../post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.scss']
})
export class PostAddComponent implements OnInit {

  constructor(private ps: PostService, private fb: FormBuilder, private router: Router) {
  }

  form!: FormGroup;
  formSubmitted = false;

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [],
      title: [, [Validators.required, Validators.minLength(3)]],
      body: [, Validators.required],
      user: this.fb.group({
        id: [],
        login: [],
        mail: []
      })
    })
  }

  getGroup(formControlName: string): FormGroup {
    return this.form.controls[formControlName] as FormGroup;
  }

  submitForm() {
    this.formSubmitted = true;
    if (this.form.valid) {
      this.ps.add(this.form.value).subscribe()
    }
  }
}
