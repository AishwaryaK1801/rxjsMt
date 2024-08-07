import { Component, OnInit } from '@angular/core';
import { OfService } from '../../services/of.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(
    private _ofService : OfService
  ) { }

  ngOnInit(): void {
    console.log(`##################        of$      #####################`);
    
    this._ofService.of$.subscribe(res=>{
      console.log(res);
      
    })
    

    console.log('##################      todo$     ##################');
    
    this._ofService.todos$.subscribe(res=>{
      console.log(res);    
    });

  }

}
