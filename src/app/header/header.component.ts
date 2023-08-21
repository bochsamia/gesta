import { Component, OnInit , Input , OnDestroy , ViewChild, HostListener } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { User } from '../../app/domain/User';
import { AuthService } from '../../app/services/auth.service';
import { UserService } from '../../app/services/user.service';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SenddataService } from "../../app/services/senddata.service";
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { DeeplinkComponent } from '../deeplink/deeplink.component';
import { DeeplinkiosComponent } from '../deeplinkios/deeplinkios.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {


  message:string;
  subscription: Subscription;

  signinForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required ,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')  ]),
    password: new FormControl('', [ Validators.required, Validators.minLength(7) ,
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')
    ]),
  }
  );


  imgcouv : any;

  dodo:any;

  @Input()
  x:any;

  @Input()
  y:any;

  @Input()
  z:any;

  @Input()
  a:any;

  @Input()
  ah:any;

  @Input()
  b:any;

  bool  :any;
  bool2:any;

  videoUrl : any;


  stg : any;

number : any;

imgprofil : any;

  email : any;
  booltoken : any;
  booltokenad : any;
  userNotFound = false;
  showSpinner = false;

  cat ='en';

  @Input()
  component : any;

  constructor( private data: SenddataService ,private toastr : ToastrService ,private router : Router, private userService: UserService, public translate : TranslateService , private auth: AuthService){

    this.translate.setDefaultLang('en');


    this.cat = localStorage.getItem('lang');


    this.translate.addLangs(['en','ar']);

    this.translate.setDefaultLang(this.cat);




   }


   scrolltoabout(k){
      window.scrollTo(0, 600);

  this.change(k);
   }


   scrolltoserv(k){
    window.scrollTo(0, 1700);

this.change(k);
 }

   logoutadmin()
   {



    localStorage.removeItem('access_token_admin');
    localStorage.removeItem('email');

      this.router.navigate(['/']);


      this.booltoken = false;

      localStorage.removeItem('idpros');


 this.ngOnInit()



 this.message = localStorage.getItem('idpros');







   }









   logout()
   {



    localStorage.removeItem('access_token');
    localStorage.removeItem('email');

      this.router.navigate(['/gda']);




      this.booltoken = false;

      localStorage.removeItem('idpros');


 this.ngOnInit()




   }

   testtoastr(){
    this.toastr.success("hello")
   }

   toprofil(){


   let email = localStorage.getItem('email')

          this.router.navigate(['profile', email]);





   }


   onConnect() {


    this.showSpinner = true;
    const email = this.signinForm.value.email;
    const password = this.signinForm.value.password;
    let user: User ;
    user = {mail: email, password: password };
    this.auth.signin(email, password).subscribe(
          res => {

            this.userService.getUserAfterSignin(email).subscribe(
              res2 => {

  /*if (res2.isadmin == "user") {*/



                localStorage.setItem('access_token', res.token);
                localStorage.setItem('email', email);

                this.booltoken = true;

                this.router.navigate(['/gestprofil/profile']);

                this.ngOnInit();
                this.message = "0"


                this.email = res.email ;


                setTimeout(() => {

                window.location.reload();
                }, 500);


             /* }*/

             },
              err => {
                this.showSpinner = false;
              },
              () => {
              this.showSpinner = false;
              }
            );

        },
          err => { console.log(err); this.userNotFound = true;
          this.showSpinner = false; },

        );

  }



   change(k)
   {

  switch (k)
  {
   case 1 :
   if (this.component != 'about' ){
   this.x= "active",
            this.y="",this.z="",this.a="", this.ah="", this.b="";


          }
   break;
   case 2 : this.y ="active",
            this.x="" , this.z="",this.a="", this.ah="", this.b="";
   break;
   case 3 : this.z= "active",
            this.x="" , this.y="" , this.a="", this.ah="", this.b="";
   break;
   case 4 : this.a ="active",
            this.x="" , this.y="", this.z="" , this.ah="", this.b="";
    break;
   case 5 : this.b ="active",
            this.x="" , this.y="" , this.z="" , this.ah="", this.a=""
            break;
            case 6 : this.ah ="active",
                     this.x="" , this.y="" , this.z="" , this.a=""
  }


   }


   toconnect(){






   }



   ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  ngOnInit() {

    if (this.userService.validToken() == true){

      this.bool = true;
      this.bool2 = false;

    }else {


      this.bool = false;
      this.bool2 = true;

    }


    let email = localStorage.getItem('email')

    this.userService.getUserAfterSignin(email).subscribe(
      res => {
this.imgcouv = res.pic;

if (this.imgcouv != null){
  this.imgprofil = this.imgcouv;
}else
{
  this.imgprofil = "assets/avatar.jpg"
}

      }) ;

    this.subscription = this.data.currentMessage.subscribe(message => this.message = message)

    this.number = localStorage.getItem("numberpan");




    if (this.userService.validToken() == true){
      this.booltoken = true

    }else {
      this.booltoken = false;
    }


    if (this.userService.validTokenAdmin() == true){
      this.booltokenad = true
    }else {
      this.booltokenad = false;
    }


  }





  colc()
  {
    return {"color":"black" };
  }



  colcnn()
  {
    return {"color":"#F5F5F5"};
  }


  arabic()
  {
      localStorage.setItem('lang', 'ar');
      var cat = localStorage.getItem('lang');


        this.translate.use("ar");
        this.translate.use(localStorage.getItem("currency"));

       this.translate.setDefaultLang('ar');

       this.videoUrl = this.translate.instant("HOME.video");


       this.ngOnInit();

  }

  english()
  {
      localStorage.setItem('lang', 'en');
      var cat = localStorage.getItem('lang');

        this.translate.use("en");

        this.translate.use(localStorage.getItem("currency"));

       this.translate.setDefaultLang('en');

       this.videoUrl = this.translate.instant("HOME.video");

       this.ngOnInit();
  }



}
