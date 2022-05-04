import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs';
import {Post} from '../../model/post.model';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.scss'],
})
export class SiblingComponent implements OnInit {

  posts: Post[] = []

  constructor(private testService: PostService, private postService: PostService) { }

  ngOnInit(): void {
      this.postService.findAll().subscribe( v => this.posts = v)
  }

}
