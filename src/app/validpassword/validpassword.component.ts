import { Component, OnInit , Input , ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ValidComponent } from '../valid/valid.component';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';
import { ValidconfirmationComponent } from '../validconfirmation/validconfirmation.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-validpassword',
  templateUrl: './validpassword.component.html',
  styleUrls: ['./validpassword.component.scss']
})
export class ValidpasswordComponent implements OnInit {

  kkk: FormGroup;


  @ViewChild (ValidconfirmationComponent , { static: true }) child: ValidconfirmationComponent;

  text:any;
  @Input()
  component: string;
  @Input()
  modal: any;


 bool = false;
 bool2 = false;


  constructor(   
    private translate : TranslateService,
    private toastr : ToastrService,
    private fbbvalid: FormBuilder, 
    private httpClient:HttpClient , private userService : UserService) {

      let formmControls = {
        password: new FormControl('',[
        Validators.required,
       
      ])
    
    }
    this.kkk = this.fbbvalid.group(formmControls)
    
    }

  


  ngOnInit() {
    
  }

 
  get password() { return this.kkk.get('password') }



  onClose() {
    this.modal.hide();
  }

  testerpwd()
  {
    let data2 = this.kkk.value;
    const email =localStorage.getItem('email');
    console.log('data.mdp=',data2.password)
    this.userService.testPassword(email,data2.password).subscribe(
      result=>{
        this.text = result ;
        console.log(this.text)
        if (this.text == true)
  {
    this.bool = true;
    this.bool2 = false;
    this.child.modal.show();
   

  }


      },
      error=>{
        this.bool = false;
        this.bool2 = true;
        this.child.modal.hide();

        this.text = error ;
        console.log(this.text);
        this.toastr.error(this.translate.instant("HOME.passinc"));


      }
    )
      

  }
}
