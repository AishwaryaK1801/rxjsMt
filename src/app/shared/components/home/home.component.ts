import { Component, OnDestroy, OnInit } from '@angular/core';
import { OfService } from '../../services/of.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _ofService : OfService
  ) { }

  ngOnInit(): void {

    console.log(`custom observable`);
    

    this._ofService.customIntervals$
    .subscribe(
      (num=>{console.log(num) }),
      (error=>{console.log(error) }),
      ()=>{console.log(`Observable is completed!`);
      }
  )


  }

  

}
