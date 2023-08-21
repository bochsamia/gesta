import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-spg',
  templateUrl: './spg.component.html',
  styleUrls: ['./spg.component.scss']
})
export class SpgComponent implements OnInit {

	alldoc : any;

	val1 : any;
 
	specdoc:any;
   

  profileForm = new FormGroup({

	  nbMaxPrModifiables : new FormControl(),
	   jourDebutEte : new FormControl(),
	    moisDebutEte : new FormControl(),
	  jourFinEte : new FormControl(),
	 moisFinEte : new FormControl(),
	 dureeMaxDiscussionAm : new FormControl(),
	  delaiMaxDepotPrAct : new FormControl(),
	 delaiMaxDepotAmAct : new FormControl(),
	 quorumReqRc : new FormControl(),
  quorumSprReguliere : new FormControl(),
	 quorumSprDFond : new FormControl(),
	 libelleSprReguliere : new FormControl(),
	 remiseQuestionDiscussionHorsSprRc : new FormControl(),
	  quorumSprRcDFondSystematique : new FormControl(),
	 dureePeriodeComptageNonExpressions : new FormControl(),
	  nbmaxNonExpressionsParmembre : new FormControl(),
	  nonExprimeExpa : new FormControl(),
	 nbmaxAvertissements : new FormControl(),
	  dureeExclusionTemporaire : new FormControl(),
	  nbmaxExclusion: new FormControl(),
  }
  );

  
  constructor(private userService : UserService , private toastr : ToastrService) { }


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



  newpar(){


    let doc = this.profileForm.value;
    this.userService.newpar(doc).subscribe(
      res=>{
                  this.toastr.success("Paramètres ajouté avec succès")
      },
      err=>{

      }

    )

  }

  ngOnInit() {
    this.userService.getAllParams().subscribe(
      res => {
        this.alldoc = res[res.length - 1]

        this.profileForm.patchValue({
          nbMaxPrModifiables : this.alldoc.nbMaxPrModifiables,
          jourDebutEte : this.alldoc.jourDebutEte,
           moisDebutEte : this.alldoc.moisDebutEte,
         jourFinEte : this.alldoc.jourFinEte,
        moisFinEte : this.alldoc.moisFinEte,
        dureeMaxDiscussionAm : this.alldoc.dureeMaxDiscussionAm,
         delaiMaxDepotPrAct : this.alldoc.delaiMaxDepotPrAct,
        delaiMaxDepotAmAct : this.alldoc.delaiMaxDepotAmAct,
        quorumReqRc : this.alldoc.quorumReqRc,
       quorumSprReguliere : this.alldoc.quorumSprReguliere,
        quorumSprDFond : this.alldoc.quorumSprDFond,
        libelleSprReguliere : this.alldoc.libelleSprReguliere,
        remiseQuestionDiscussionHorsSprRc : this.alldoc.remiseQuestionDiscussionHorsSprRc,
         quorumSprRcDFondSystematique : this.alldoc.quorumSprRcDFondSystematique,
        dureePeriodeComptageNonExpressions : this.alldoc.dureePeriodeComptageNonExpressions,
         nbmaxNonExpressionsParmembre : this.alldoc.nbmaxNonExpressionsParmembre,
         nonExprimeExpa : this.alldoc.nonExprimeExpa,
        nbmaxAvertissements : this.alldoc.nbmaxAvertissements,
         dureeExclusionTemporaire : this.alldoc.dureeExclusionTemporaire,
         nbmaxExclusion: this.alldoc.nbmaxExclusion,
       
        })
    
      } , 
      res => {

      }
    )
    

  }

}
