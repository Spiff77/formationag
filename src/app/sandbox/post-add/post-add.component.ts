import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PostService} from '../post.service';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.scss']
})
export class PostAddComponent implements OnInit {

  constructor(private ps: PostService) { }

  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(),
      title: new FormControl("Hello"),
      body: new FormControl(),
    })
  }

  submitForm() {
    this.ps.add(this.form.value).subscribe();
  }
}
