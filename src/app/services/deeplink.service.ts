import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class DeeplinkService {

 constructor() {}


 /*

 
window.location.replace("yourapp://path/"); setTimeout(function () {

window.location.replace("https://itunes.apple.com/app/id12345678"); }, 2000);


 */



 deeplink() {
   let ua = navigator.userAgent.toLowerCase();
   let isAndroid = ua.indexOf("android") > -1; // android check
   let isIphone = ua.indexOf("iphone") > -1; // ios check
   if (isIphone == true) {
    let app = { 
      launchApp: function() {
       setTimeout(function() {
         window.location.href = "https://itunes.apple.com/us/app/appname/appid";
       }, 25);
       window.location.href = "bundlename://linkname"; //which page to open(now from mobile, check its authorization)
      },
      openWebApp: function() {
       window.location.href = "https://itunes.apple.com/us/app/appname/appid";
      }
  };
  app.launchApp();
 } else if (isAndroid== true) {
    let app = { 
      launchApp: function() {
        var intent = "intent://app#Intent;package=com.example.maktub;scheme=MAKTUB;end";
        window.location.href = intent;
      
      },
      openWebApp: function() {
        window.location.href =  "https://play.google.com/store/apps/details?id=packagename";
      }
  };
  app.launchApp();
 }else{
  //navigate to website url
 }
}
}