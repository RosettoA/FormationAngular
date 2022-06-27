import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
  public save: boolean = false;

  canDeactivate(): boolean {
    if (this.save) {
      return true;
    } else {
      return confirm('Etes-vous sûr de vouloir quitter ?');
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
