import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../app/services/auth.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../../app/services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User7 } from '../domain/User7';

@Component({
  selector: 'app-cnx',
  templateUrl: './cnx.component.html',
  styleUrls: ['./cnx.component.scss']
})
export class CnxComponent implements OnInit {
  bool1 : any;
  bool2 : any;
  public component :any;

  showpass :any;
  
  showSpinner = false;
  showSuccess = false;
  showFail = false;
  userNotFound = false;

  constructor(private userService : UserService , private auth : AuthService , private router : Router , private toastr : ToastrService) { }

  profileForm = new FormGroup({
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
    
        initiales: new FormControl(),
        prenomMembre: new FormControl(),
        nomMembre: new FormControl(),
        motPasseMembre: new FormControl(),
    
    
    
      }
      );

  ngOnInit() {
  }


  onConnect() {
    
    this.showSpinner = true;
    const email = this.profileForm.value.initiales;
    const password = this.profileForm.value.motPasseMembre;
    const user: User7 = {initiales: '',  motPasseMembre: ''};
    this.auth.signin(email, password).subscribe(
          res => { console.log(this.userService.decodeToken(res.token));
          localStorage.setItem('access_token', res.token);
          localStorage.setItem('email', email);

         /* this.booltoken = true;*/


        },
          err => { console.log(err); 
            this.userNotFound = true;
          this.showSpinner = false; },
          () => {
            this.userService.getUserAfterSignin(email).subscribe(
              res => { 
               
                this.router.navigate(['/pag']);
setTimeout(() => {            
      window.location.reload();

  
}, 500);
         

             },
              err => {
                this.showSpinner = false;
                
              },
              () => {
              this.showSpinner = false;
              }
            );
           }
        );

  }



}
