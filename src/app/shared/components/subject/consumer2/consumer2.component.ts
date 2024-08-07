import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-consumer2',
  templateUrl: './consumer2.component.html',
  styleUrls: ['./consumer2.component.scss']
})
export class Consumer2Component implements OnInit {

  userName !: string
  constructor(
    private _userService : UsersService
  ) { }

  ngOnInit(): void {
   this._userService.userSub$
   .subscribe(val=>{
    this.userName=val
   })
  
  }

}
