import { Component, OnInit , ViewChild} from '@angular/core';
import { DeeplinkComponent } from '../deeplink/deeplink.component';
import { DeeplinkiosComponent } from '../deeplinkios/deeplinkios.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cyo',
  templateUrl: './cyo.component.html',
  styleUrls: ['./cyo.component.css']
})
export class CyoComponent implements OnInit {

  

  @ViewChild (DeeplinkComponent , { static: true }) child: DeeplinkComponent;

  @ViewChild (DeeplinkiosComponent , { static: true }) childios: DeeplinkiosComponent;

  public component :any;

  constructor(private router : Router) {

    this.component = "cyo";
   }

  ngOnInit() {

    if(window.navigator && window.navigator.userAgent.match(/android/i)  || window.navigator && window.navigator.userAgent.match(/iphone/i) || window.navigator && window.navigator.userAgent.match(/ipad/i) || window.navigator && window.navigator.userAgent.match(/blackberry/i))
    {
      this.router.navigate(['appli']);
  
    }  
  
    }
    

  

}
