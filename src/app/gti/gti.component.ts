import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-gti',
  templateUrl: './gti.component.html',
  styleUrls: ['./gti.component.scss']
})
export class GtiComponent implements OnInit {

  val1 : any;
  specid : any;

  allinf : any;
  
  profileForm = new FormGroup({
  
    libelleInf : new FormControl(),
    nivGrav : new FormControl(),
    maxNiv : new FormControl(),
    nbInf : new FormControl(),


  });

  constructor(private userService : UserService , private toastr : ToastrService) { }


  getinf(){
   
    this.userService.getinf(this.val1).subscribe(
      res => {

        this.specid = res.idInf;
        this.profileForm.patchValue({
          libelleInf : res.libelleInf,
          nivGrav : res.nivGrav,
          maxNiv : res.maxNiv,
          nbInf : res.nbInf,
        })
        console.log(res)
    

      }, err => {
        
      }
    )

  }

  updateinf(){
  
    let doc = this.profileForm.value;
    doc.idInf = this.specid;
  
    console.log(doc)

    this.userService.updateinf(doc).subscribe(
       res => {
  
      this.toastr.success("Infraction modifié avec succès")
  
  
       } , res =>{

       }
    )
  }



  deleteinf(){

    this.userService.deleteinf(this.val1).subscribe(
      res=>{
               this.toastr.success("Infraction supprimé avec succès")
               this.profileForm.reset();
      },err=>{

      }
    )

  }

  newinf(){


    let inf = this.profileForm.value;

    console.log(inf)
    this.userService.newinf(inf).subscribe(
      res=>{
            this.toastr.success("Infraction ajouté avec succès")
      },
      err=>{

      }

    )

  }
  ngOnInit() {

    this.userService.getAllInf().subscribe(
      res => {
        this.allinf = res
      } , 
      res => {

      }
    )
  }

}
