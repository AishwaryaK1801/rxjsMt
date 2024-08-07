import { Injectable } from '@angular/core';
import { filter, map, Observable, tap } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class OfService {

  constructor() { }


// 1
  of$ = of(1,2,3,4,5,6,7,8,9,10)
  .pipe(
    filter((num:number)=>{
      return num%2 ===0
    })
  )


  // 2

  todos$ =of("html", "css", "js" , "Angular", "Rxjs", "NodeJs", "Ts" )
  .pipe(
    tap(todo=>{
      console.log(`Before map->${todo}`);      
    }),
    map((todo:string)=>{
      return `Todo Item is ${todo}`
    }),
    tap(todo=>{
      console.log(`After map ->${todo}`);      
    })
  )

   // custom observable->
   customIntervals$ = new Observable((observer)=>{
    let count = 0;

    setInterval(()=>{
      observer.next(count);
      count++
      if(count==5){
        observer.complete()
      }

      if(count==13){
        observer.error(`13 is Devil's Number !!`)
      }
    },1000)
  })
}
