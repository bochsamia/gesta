import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-gdm',
  templateUrl: './gdm.component.html',
  styleUrls: ['./gdm.component.scss']
})
export class GdmComponent implements OnInit {

  
  alldoc : any;

   val10 : any;

   specdoc:any;
  
  profileForm = new FormGroup({
  
      prenomMembre  : new FormControl(),
       nomMembre  : new FormControl(),
      motPasseMembre  : new FormControl(),
        adresseMailMembre  : new FormControl(),
       estAdmin  : new FormControl(),
     
    
    
      }
      );
    

  constructor(private userService : UserService , private toastr : ToastrService) { }


  show(){
    console.log(this.val10)
  }

upmemb(){
  
  let doc = this.profileForm.value;
  doc.iddoc = this.specdoc.iddoc;

  this.userService.updatememb(doc).subscribe(
     res => {
      this.toastr.success("Membre modifié avec succès")



     } , res =>{

     }
  )
}




  deletedoc(){

    this.userService.deletedoc(this.val10).subscribe(
      res=>{
        this.toastr.success("Document supprimé avec succès")
          this.profileForm.reset()
      },err=>{

      }
    )

  }

  newmemb(){


    let doc = this.profileForm.value;
    this.userService.newmembre(doc).subscribe(
      res=>{
                  this.toastr.success("Membre ajouté avec succès")
      },
      err=>{

      }

    )

  }





  getmembre(){
   
    this.userService.getmemb(this.val10).subscribe(
      res => {

        console.log(res)
        this.specdoc = res;
        this.profileForm.patchValue({

          prenomMembre  : res.prenomMembre,
          nomMembre  : res.nomMembre,
         motPasseMembre  : res.motPasseMembre,
           adresseMailMembre  : res.adresseMailMembre,
          estAdmin  : res.estAdmin,
     
        })
        console.log(res)
    

      }, err => {
        
      }
    )

  }

  ngOnInit() {

    this.userService.getAllMembres().subscribe(
      res => {
        this.alldoc = res

        console.log(this.alldoc)
      } , 
      res => {

      }
    )
    

  }

}
