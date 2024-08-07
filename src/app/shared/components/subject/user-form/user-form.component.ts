import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {


  userForm !:FormGroup;
  constructor(
    private _userService : UsersService
  ) { }

  ngOnInit(): void {

    this.userForm = new FormGroup({
      userName : new FormControl(null, [Validators.required])
    })
  }


  onSubmit(){
    let value= this.userForm.controls['userName'].value

    console.log(value);
    this.userForm.reset();
    this._userService.userSub$.next(value);
    

  }
}
