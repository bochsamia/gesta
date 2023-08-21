import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dvm',
  templateUrl: './dvm.component.html',
  styleUrls: ['./dvm.component.scss']
})
export class DvmComponent implements OnInit {




  
  alldoc : any;

   val10 : any;

   specdoc:any;
  
  profileForm = new FormGroup({
    membreAp : new FormControl(),
	membreCms : new FormControl(),
	inputCms : new FormControl(),
	prenomMembre : new FormControl(),
	nomMembre : new FormControl(),
	adresseMailMembre : new FormControl(),
	delegue : new FormControl(),
	role : new FormControl(),
	estAdmin : new FormControl(),
    
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
        this.toastr.success("Membre supprimé avec succès")
          this.profileForm.reset()
      },err=>{

      }
    )

  }

  newdv(){


    let doc = this.profileForm.value;
    this.userService.newdvm(doc).subscribe(
      res=>{
                  this.toastr.success("DVM ajouté avec succès")
      },
      err=>{

      }

    )

  }





  getdv(){
   
    this.userService.getdvm(this.val10).subscribe(
      res => {

        console.log(res)
        this.specdoc = res;
        this.profileForm.patchValue({

          prenomMembre  : res.prenomMembre,
          nomMembre  : res.nomMembre,
         motPasseMembre  : res.motPasseMembre,
           adresseMailMembre  : res.adresseMailMembre,
           estAdmin : res.estAdmin,
           membreAp : res.membreAp,
           membreCms : res.membreCms,
           inputCms : res.inputCms,
           delegue : res.delegue,
           role : res.role     
        })
        console.log(res)
    

      }, err => {
        
      }
    )

  }

  ngOnInit() {

    this.userService.getAllDvm().subscribe(
      res => {
        this.alldoc = res

        console.log(this.alldoc)
      } , 
      res => {

      }
    )
    

  }

}
