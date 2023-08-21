import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { User5 } from '../../app/domain/User5';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  showSpinner = false;
  showSuccess = false;
  userNotFound = false;

  component : any;


  constructor(private auth: AuthService , private userService: UserService, private router: Router) {

    this.component = "Admin"


   }

  
  adminForm = new FormGroup({
    /*
        email: new FormControl('', [Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')  ]),
        password: new FormControl('', [ Validators.required, Validators.minLength(7) ,
          Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')
        ]),
      
        emaillogin: new FormControl('', [Validators.email, Validators.required ,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')  ]),
        passwordlogin: new FormControl('', [ Validators.required, Validators.minLength(7) ,
          Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')
        ]),
    
        confirmpassword: new FormControl('', [ Validators.required, Validators.minLength(7) ,
          Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')
        ]),*/
    
        email: new FormControl(),
        password: new FormControl(),
        emaillogin: new FormControl(),
        passwordlogin: new FormControl(),
        confirmpassword: new FormControl(),
    
    
    
        nom: new FormControl(),
        prenom: new FormControl(),
        username: new FormControl(),
        phone: new FormControl(),
    
      }
      );
    

  ngOnInit() {

      
    if(window.navigator && window.navigator.userAgent.match(/android/i)  || window.navigator && window.navigator.userAgent.match(/iphone/i) || window.navigator && window.navigator.userAgent.match(/ipad/i) || window.navigator && window.navigator.userAgent.match(/blackberry/i))
    {
      this.router.navigate(['appli']);
  
    }


  }

  onConnect() {
    this.showSpinner = true;
    const email = this.adminForm.value.emaillogin;
    const password = this.adminForm.value.passwordlogin;
    let user: User5 ;
    user = {mail: email, password: password };
    this.auth.signin(email, password).subscribe(
          res => { 
            
  localStorage.setItem('access_token_admin', res.token);
  localStorage.setItem('emailadmin', email);
  
  

            this.userService.getUserAfterSignin(email).subscribe(
              res => { 

                let x = res.isadmin;

               if (x === "isadmin")
{
  


               this.router.navigate(['template']);
}

             },
              err => {
                this.showSpinner = false;
              },
              () => {
              this.showSpinner = false;
              }
            );



            

      

          

        },
          err => { console.log(err); 
            this.userNotFound = true;
          this.showSpinner = false; },
          () => {

           }
        );

  }


}
