import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SenddataService {

  y:any;
  x :any;

  messageSource:any;
  message2Source:any;

  currentMessage : any;
  currentMessage2: any;

  constructor() {
    
    this.x = JSON.parse(localStorage.getItem("idpros")) ;
    

    if(this.x == null)
    {this.y = 0;}else
    {this.y = JSON.parse(localStorage.getItem("idpros")).length - 1 ;}

     this.messageSource = new BehaviorSubject(this.y.toString());
     this.message2Source = new BehaviorSubject('');

    
  this.currentMessage = this.messageSource.asObservable();
  this.currentMessage2 = this.message2Source.asObservable();
  
   }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }
  changeMessage2(message2: string) {
    this.message2Source.next(message2)
  }

}