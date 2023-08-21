import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-lti',
  templateUrl: './lti.component.html',
  styleUrls: ['./lti.component.scss']
})
export class LtiComponent implements OnInit {

  
  alldoc : any;

   val1 : any;

   specdoc:any;
  
  profileForm = new FormGroup({
  
    libelleInf : new FormControl(),
    nivGrav : new FormControl(),
    maxNiv : new FormControl(),
    nbInf : new FormControl(),

    
      }
      );
    

  constructor(private userService : UserService) { }


  show(){
    console.log(this.val1)
  }

updatedoc(){
  
  let doc = this.profileForm.value;
  doc.iddoc = this.specdoc.iddoc;

  this.userService.updatedoc(doc).subscribe(
     res => {



     } , res =>{

     }
  )
}


  getinf(){
   
    this.userService.getinfra(this.val1).subscribe(
      res => {

        this.specdoc = res;
        this.profileForm.patchValue({

          libelleInf : res.libelleInf,
          nivGrav : res.nivGrav,
          maxNiv : res.maxNiv,
          nbInf : res.nbInf
  
        })
        console.log(res)
    

      }, err => {
        
      }
    )

  }


  deletedoc(){

    this.userService.deletedoc(this.val1).subscribe(
      res=>{

      },err=>{

      }
    )

  }

  newdoc(){


    let doc = this.profileForm.value;
    this.userService.newdoc(doc).subscribe(
      res=>{

      },
      err=>{

      }

    )

  }

  ngOnInit() {

    this.userService.getAllInf().subscribe(
      res => {
        this.alldoc = res
      } , 
      res => {

      }
    )
    

  }

}

