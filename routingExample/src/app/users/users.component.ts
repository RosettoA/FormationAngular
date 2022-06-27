import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export interface User {
  id: number;
  name: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  public users: User[] = [
    {
      id: 1,
      name: 'Jean',
    },
    {
      id: 2,
      name: 'Julie',
    },
    {
      id: 3,
      name: 'Antony',
    },
  ];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {}

  public redirection(user: User): void {
    this.router.navigate([user.id], {
      relativeTo: this.activatedRoute,
      queryParams: {
        name: user.name,
      },
      queryParamsHandling: 'merge',
      fragment: 'foo',
    });
  }
}
