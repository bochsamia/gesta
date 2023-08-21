import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../app/services/auth.service';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../../app/services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User7 } from '../domain/User7';

@Component({
  selector: 'app-gda',
  templateUrl: './gda.component.html',
  styleUrls: ['./gda.component.scss']
})
export class GdaComponent implements OnInit {
  showErrors = {
    initials: false,
    firstName: false,
    lastName: false,
    password: false
  };
  bool1 : any;
  bool2 : any;
  public component :any;

  showpass :any;

  showSpinner = false;
  showSuccess = false;
  showFail = false;
  userNotFound = false;

  constructor(private fb: FormBuilder,private userService : UserService , private auth : AuthService , private router : Router , private toastr : ToastrService) { }

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
    this.profileForm = this.fb.group({
      initials: ['', [Validators.required, Validators.pattern(/^[A-Z]{3}$/)]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  onSignUp() {
    this.showSpinner = true;

    if (!this.profileForm.valid) {

      this.showErrors.initials = this.profileForm.get('initials').hasError('required');
      this.showErrors.firstName = this.profileForm.get('firstName').hasError('required');
      this.showErrors.lastName = this.profileForm.get('lastName').hasError('required');
      this.showErrors.password = this.profileForm.get('password').hasError('required');
      return;
    }

  const initiales = this.profileForm.value.initiales;
  const nomMembre = this.profileForm.value.nomMembre;
  const prenomMembre = this.profileForm.value.prenomMembre;
  const motPasseMembre = this.profileForm.value.motPasseMembre;

// Réinitialisez les messages d'erreur
    this.showErrors = {
      initials: false,
      firstName: false,
      lastName: false,
      password: false
    };
    const user: User7 = {initiales: '', nomMembre: '', motPasseMembre: ''};
    user.initiales = this.profileForm.value.initiales;
    user.motPasseMembre = this.profileForm.value.motPasseMembre;
    user.nomMembre = this.profileForm.value.nomMembre;
    user.prenomMembre = this.profileForm.value.prenomMembre;
    user.estAdmin = 1;
  if(this.profileForm.value.password === null || this.profileForm.value.password === "")
  {
this.showpass =true;
  } else {
    this.showpass = false;
  }






    this.auth.signup(user).subscribe(


      res => {  localStorage.setItem('access_token', res.token);
      this.router.navigate(['/pag']);

      },
      err => {/* show fail alert */
      this.showFail = true;
      console.log(err);
      this.showSpinner = false;
      this.toastr.error('Une erreur s\'est produite lors de l\'enregistrement.');},
      () => {
        /* show success alert */
        this.showSuccess = true;
        this.showSpinner = false;
        {
          this.userService.getUserAfterSignin(user.initiales).subscribe(
            res => {

              this.toastr.success("Les données de l\'administrateur ont bien été enregistrées.");
              localStorage.setItem('username', user.nomMembre);
            localStorage.setItem('fonction', '');
            localStorage.setItem('email', res.mail);
            window.location.reload();
           },
            err => {
              this.showSpinner = false;
            },
            () => {
            this.showSpinner = false;


            }
          );
         }
      }
    );


  }


}
