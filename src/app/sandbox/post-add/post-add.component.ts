import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PostService} from '../post.service';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.scss']
})
export class PostAddComponent implements OnInit {

  constructor(private ps: PostService, private fb: FormBuilder) { }

  form!: FormGroup;
  formSubmitted = false;

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [],
      title: [, [Validators.required, Validators.minLength(3)]],
      body: [, Validators.required],
    })
  }

  submitForm() {
    this.formSubmitted = true;
    if(this.form.valid){
      this.ps.add(this.form.value).subscribe();
    }
  }
}
