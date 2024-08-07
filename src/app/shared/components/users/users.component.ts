import { Component, OnDestroy, OnInit } from '@angular/core';
import { OfService } from '../../services/of.service';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit, OnDestroy {
  constructor(private _ofService: OfService) {}

  // 1)interval subscribe And Unsubscribe
  interval$ = interval(1000);
  intervalSub!: Subscription;
  ngOnInit(): void {
    console.log(`1) interval subscribe And Unsubscribe`);

    this.intervalSub = this.interval$.subscribe((res) => {
      console.log(res);
    });
  }

  ngOnDestroy(): void {
    this.intervalSub.unsubscribe();
  }
}
