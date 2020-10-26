import { Component, OnInit } from '@angular/core';
import { PostService } from './post-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  users: any = []; /// mapear
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  trackById(index: number, item: any) {
    return item.id;
  }

  //onClickMe () {
  clickAdd(user: Object) {
    this.postService.postUsers(user).subscribe((users) => {
      this.users = users;
    });
    alert('Usuario ' + user['login'] + ' adicionado');
  }
}
