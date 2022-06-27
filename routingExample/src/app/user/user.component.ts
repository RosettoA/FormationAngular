import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '../users/users.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  public id: string;
  public name: string;
  public details: string;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
    });

    this.activatedRoute.queryParamMap.subscribe((paramMap: ParamMap) => {
      this.name = paramMap.get('name');
      this.details = paramMap.get('details');
    });

    this.activatedRoute.fragment.subscribe((fragment: string) => {
      console.log(fragment);
    });

    this.activatedRoute.data.subscribe(
      (data: { title: string; user: User }) => {
        console.log(data);
      }
    );
  }
}
