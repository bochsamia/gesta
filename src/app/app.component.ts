import { Component, OnInit , Input  , ViewChild} from '@angular/core';
import { DeeplinkService } from './services/deeplink.service';
import { DeeplinkComponent } from './deeplink/deeplink.component';
import { ActivatedRoute } from '@angular/router';
import { DeeplinkiosComponent } from './deeplinkios/deeplinkios.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  number = 0;

  @ViewChild (DeeplinkComponent , { static: true }) child: DeeplinkComponent;

  @ViewChild (DeeplinkiosComponent , { static: true }) childios: DeeplinkiosComponent;


  deepling : any;

  x:boolean;

  addItem(newItem: number) {
   this.number = newItem++;
  }

component : any;
  constructor( private deeplinkService : DeeplinkService , private route: ActivatedRoute) {
    this.route.url.subscribe(url => {
      console.log('URL:', url);
      // navigate to the appropriate component/page based on the URL
    });
  }



  public onRouterOutletActivate(component : any) {
  
      this.component = component.component ;
console.log(this.component);
    
}

handleTripDetail(){
  this.deeplinkService.deeplink();
}

showmodal()
{
  this.child.modal.show();
}

showmodal2()
{
  this.deepling.show();
}






  ngOnInit() {
    /*let ua = navigator.userAgent.toLowerCase();
    let isAndroid = ua.indexOf("android") > -1; 
    let isIphone = ua.indexOf("iphone") > -1; 
    if(isIphone == true )*/

    if (window.navigator && window.navigator.userAgent.match(/android/i)  ){

      setTimeout(() => {
        this.child.modal.show();
      }, 1000);
    
    }
    
  if(window.navigator && window.navigator.userAgent.match(/iphone/i) || window.navigator && window.navigator.userAgent.match(/ipad/i) || window.navigator && window.navigator.userAgent.match(/blackberry/i))
  {
    
    setTimeout(() => {
      this.childios.modal.show();
    }, 1000);
  }

  }
  resetPosition(event) {
    // window.scroll(0,0);

   window.scroll({ 
    top: 0, 
    left: 0, 
    behavior: 'smooth' 
});

//or document.body.scrollTop = 0;
//or document.querySelector('body').scrollTo(0,0)
  }

}
