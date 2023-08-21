import { Component, OnInit , } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-ltd',
  templateUrl: './ltd.component.html',
  styleUrls: ['./ltd.component.scss']
})
export class LtdComponent implements OnInit {

  alldoc : any;

   val1 : any;

   specdoc:any;
  
  profileForm = new FormGroup({
  
       typeDocument : new FormControl(),
       libelleTypeDocument : new FormControl(),
       texteReference : new FormControl(),
       dernierNumeroUtilise : new FormControl(),
       typeDocumentVise : new FormControl(),
       saisieArticleVise : new FormControl(),
       delaiMaxDepotEI : new FormControl(),
       delaiMaxDepotAMSA : new FormControl(),
       saisieNiveau : new FormControl(),
       niveauMax : new FormControl(),
       expressionMembresPrevue : new FormControl(),
       tauxMinPalier1Vmp : new FormControl(),
       nbHeuresPalier1Horsete : new FormControl(),
       nbHeuresPalier1Ete : new FormControl(),
       tauxMinPalier2Vmp : new FormControl(),
       nbHeuresPalier2 : new FormControl(),
       tauxMinPalier3Vmp : new FormControl(),
       valideEnSprRc : new FormControl(),
       delaiMinBalanceSprRc : new FormControl(),
       nbmaxRefuses : new FormControl(),
       dureeReference : new FormControl(),
       dureeBlocageHorsete : new FormControl(),
       dureeBlocageEte : new FormControl(),
       nonExpressionType : new FormControl(),
    
    
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


  getdoc(){
   
    this.userService.getdoc(this.val1).subscribe(
      res => {

        this.specdoc = res;
        this.profileForm.patchValue({
          libelleTypeDocument : res.libelleTypeDocument,
          texteReference : res.texteReference ,
          dernierNumeroUtilise : res.dernierNumeroUtilise,
          typeDocumentVise : res.typeDocumentVise,
          saisieArticleVise : res.saisieArticleVise,
          delaiMaxDepotEI : res.delaiMaxDepotEI,
          delaiMaxDepotAMSA : res.delaiMaxDepotAMSA,
          saisieNiveau : res.saisieNiveau,
          niveauMax : res.niveauMax,
          expressionMembresPrevue : res.expressionMembresPrevue,
          tauxMinPalier1Vmp : res.tauxMinPalier1Vmp,
          nbHeuresPalier1Horsete : res.nbHeuresPalier1Horsete,
          nbHeuresPalier1Ete : res.nbHeuresPalier1Ete,
          tauxMinPalier2Vmp : res.tauxMinPalier2Vmp,
          nbHeuresPalier2 : res.nbHeuresPalier2,
          tauxMinPalier3Vmp : res.tauxMinPalier3Vmp,
          valideEnSprRc : res.valideEnSprRc,
          delaiMinBalanceSprRc : res.delaiMinBalanceSprRc,
          nbmaxRefuses : res.nbmaxRefuses,
          dureeReference : res.dureeReference,
          dureeBlocageHorsete : res.dureeBlocageHorsete,
          dureeBlocageEte : res.dureeBlocageEte,
          nonExpressionType : res.nonExpressionType,
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

    this.userService.getAllDocs().subscribe(
      res => {
        this.alldoc = res
      } , 
      res => {

      }
    )
    

  }

}
