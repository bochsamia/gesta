import { Component, OnInit , ViewChild  , Input} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../app/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { ValidconfirmationComponent } from '../validconfirmation/validconfirmation.component';
import { ValidpasswordComponent } from '../validpassword/validpassword.component';

@Component({
  selector: 'app-mmp',
  templateUrl: './mmp.component.html',
  styleUrls: ['./mmp.component.scss']
})
export class MmpComponent implements OnInit {

  addUserFormm: FormGroup;

  @Input()
  component: string;
  @Input()
  modal: any;


  @ViewChild (ValidpasswordComponent , { static: true }) child: ValidpasswordComponent;


  
  hide1 : boolean = true;
  hide2 : boolean = true;
  hide3 : boolean = true;


  constructor(private fdd: FormBuilder, private translate : TranslateService , private userService:UserService , private toastr : ToastrService) { }

  ngOnInit() {

        
  let formmControls = {
    initiales: new FormControl(),
    ancienmdp: new FormControl(),
    nvmdp: new FormControl(),
    confirmPassword: new FormControl(),


    
  }

  this.addUserFormm = this.fdd.group(formmControls)


  }

  editpass()
  {


    let data = this.addUserFormm.value;
    const email =localStorage.getItem('email');

    
    if(this.addUserFormm.value.confirmPassword === this.addUserFormm.value.nvmdp){


    console.log("egaux")
      this.userService.updatePassword(data.initiales,data.ancienmdp,data.nvmdp).subscribe(
      res => {   
        this.toastr.success(this.translate.instant("HOME.ss133"));

      },
    err=>{
      this.toastr.error(this.translate.instant("HOME.pp3"));

    } 
    );
    }else {
      console.log("not egaux")

      this.toastr.error(this.translate.instant("HOME.pp3"));

    }
  }
  


}
