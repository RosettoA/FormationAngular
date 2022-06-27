import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
  AnimationEvent,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('list', [
      transition(
        ':enter',
        query('li', [
          style({ opacity: 0, transform: 'translateX(-100px' }),
          stagger(-200, animate('1500ms ease-in')),
        ])
      ),
      transition(
        ':leave',
        query('li', [
          stagger(
            -200,
            animate(
              '1500ms ease-in',
              style({ opacity: 0, transform: 'translateX(100px' })
            )
          ),
        ])
      ),
    ]),
  ],
})
export class AppComponent implements OnInit {
  public display = true;

  public toggle(event: AnimationEvent) {
    if (event.phaseName === 'done') {
      this.display = !this.display;
    }
  }

  ngOnInit() {}
}
