import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../app/services/auth.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../../app/services/user.service';
import { Router } from '@angular/router';
import { User6 } from '../../app/domain/User6';
import { User5 } from '../../app/domain/User5';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-infosperson',
  templateUrl: './infosperson.component.html',
  styleUrls: ['./infosperson.component.scss']
})
export class InfospersonComponent implements OnInit {

 
  bool1 = true;
  bool2  = false;
  public component :any;
  
  showSpinner = false;
  showSuccess = false;
  showFail = false;

  constructor(private translate : TranslateService , private router: Router, private userService: UserService, private auth: AuthService) { 


    window.scrollTo(0,0)
    this.component = "account";
  }

  
  profileForm = new FormGroup({
/*
    email: new FormControl('', [Validators.email, Validators.required ,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')  ]),
  */
    email: new FormControl(),
    nom: new FormControl(),
    prenom: new FormControl(),
    username: new FormControl(),
    phone: new FormControl(),
    address: new FormControl(),


  }
  );


  logForm = new FormGroup({

    emaillogin: new FormControl(),
    passwordlogin: new FormControl()
  
  }
  );

  ngOnInit() {

  }

  change1()
  {
    this.bool1 = true;
    this.bool2 = false;
 
  }

  change2()
  {
    
    this.bool2 = true;
    this.bool1 = false;
 
   

  }

  
  onConnect() {
    this.showSpinner = true;
    const email = this.logForm.value.emaillogin;
    const password = this.logForm.value.passwordlogin;
    let user: User5 ;
    user = {mail: email, password: password };
    this.auth.signin(email, password).subscribe(
          res => { console.log(this.userService.decodeToken(res.token));
          localStorage.setItem('access_token', res.token);
          localStorage.setItem('email', email);


          this.router.navigate(['/managprofile/profile']);

         /* this.booltoken = true;*/


        },
          err => { console.log(err); 
            /*this.userNotFound = true;*/
          this.showSpinner = false; },
          () => {
            this.userService.getUserAfterSignin(email).subscribe(
              res => { 
               
                window.location.reload();

              /*  this.email = res.email ;*/

         

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

 


  information() {




    this.showSpinner = true;
    const user: User6 = {mail: '', nom: '', prenom: '' , username:'' , adresse : '' , tel:'' , isadmin:''};
    user.mail = this.profileForm.value.email;
    user.adresse = this.profileForm.value.address;
    user.nom = this.profileForm.value.nom;
    user.prenom = this.profileForm.value.prenom;
    user.username = this.profileForm.value.username;
    user.tel = this.profileForm.value.phone;

    localStorage.setItem("usernamepubl",user.username);
    localStorage.setItem("nompubl",user.nom);
    localStorage.setItem("prenompubl",user.prenom);
    localStorage.setItem("mailpubl",user.mail);
    localStorage.setItem("phonepubl",user.tel);
    localStorage.setItem("addresspubl",user.adresse);
    localStorage.setItem("isadmin","notuser");



    if(this.profileForm.valid)
    {
    this.router.navigate(['cartpan']);
  }

  }


}
