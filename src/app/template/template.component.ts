import { Component, OnInit , Input } from '@angular/core';

import { ProductService } from '../../app/services/product.service';

import { UserService } from '../services/user.service';

import { PagerService } from '../../app/services/pager.service';

import { ToastrService } from 'ngx-toastr';

import { HttpClient } from '@angular/common/http';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { TranslateService } from '@ngx-translate/core';

import { Router } from '@angular/router';



@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  
  hide1 : boolean = true;
  hide2 : boolean = true;
  hide3 : boolean = true;

  @Input()
  modal: any;

  productList: any;
  allSelected=false;
  ij =1;
  boolfin = true;
  pager: any = {};
  pagedItemsB: any[];
  pagedItemsC : any[];

  usersList : any;

  idpro : any;
  email : any;
  quantite : any;
  firstname :any;
  lastname : any;
  username : any;
  address : any;
  phone : any;
  price : any;
  nomprod : any;
  pic : any;
  fonction : any;
  about : any;
  couverture : any;



  cmd : any;

  
  hideb = true;
  hidebb = true;

  hideus = true;
  hideaco = true;
  hideuss = true ;

  
  hidebx = true;
  hidebbx = true;

madate : any;
date : any;

component:any;

addUserFormm: FormGroup;

exist : any;


addItem(newItem: any) {
  /*

  this.exist = this.pagedItemsC.filter((item => item.product.idpro == newItem.idpro) || (item => item.person.mail == newItem.email) );


  const x = this.pagedItemsC.find((item => item.product.idpro == newItem.idpro) || (item => item.person.mail == newItem.email));

  const index1 = this.pagedItemsC.indexOf(x);

  this.pagedItemsC.splice(index1  , 1 , this.exist)  

  console.log(this.exist)*/

  this.getAllCommandes();
  this.ngOnInit();
  this.getAllCmds();
  this.setPageB(this.ij);


  
  }



  constructor(private router : Router , private translate:TranslateService, private fdd: FormBuilder, private httpClient :HttpClient, private toastr:ToastrService, private pagerService : PagerService , private userService : UserService, private productService : ProductService) { 


  

    this.component = "Template"

    this.madate = new Date();

    this.date = this.madate.getDate() + '/' + ((this.madate.getMonth() + 1)) + '/' + this.madate.getFullYear()+ '  -- ' + this.madate.getHours() + ':' + this.madate.getMinutes()+ ':' + this.madate.getSeconds()
 

  }


  refuseProduct(idpro , email  , qte){

    this.productService.updateProduct(idpro,email, qte ,"refused").subscribe(
      res=>{
        this.ngOnInit();
        this.getAllCmds();
        this.setPageB(this.ij);
      },
      err=> {
      });
  
  }

  confirmProduct(idpro , email  , qte){

    this.productService.updateProduct(idpro,email,qte ,  "confirmed").subscribe(
      res=>{
                this.ngOnInit()
                this.getAllCmds();
                this.setPageB(this.ij);
                this.toastr.success("Order Validated")
      },
      err=> {
      });
  
  }




  myFunction() {
    this.hide1 = true;
  }
  
  myFunction2() {
    this.hide1 = false;
  }

  myFunction3() {
    this.hide2 = true;
  }
  
  myFunction4() {
    this.hide2 = false;
  }

  myFunction5() {
    this.hide3 = true;
  }
  
  myFunction6() {
    this.hide3 = false;
  }





/*
  reinitialise(idpro , email  , qte){
    this.productService.updateProduct(idpro,email, qte ,"444").subscribe(
      res=>{
        this.ngOnInit()
      },
      err=> {
      });
  }*/

  deleteuser(id){
                this.userService.deleteuser(id).subscribe(
                  res => {
                    this.getAllUserss();
                    this.setPageA(this.ij);
                        this.toastr.success("Deleted");
                  }
                )
  }

  showing(nom , prenom ,pic , adresse , fonction ,
    tel, mail , username , about , couverture){

      this.firstname = prenom ;
      this.lastname = nom ;
      this.pic = pic ;
      this.address = adresse ;
      this.fonction = fonction ;
      this.phone = tel ;
      this.email = mail ;
      this.username = username ;
      this.about = about ;
      this.couverture = couverture; 


    }

  showdetail(idpro , email , quantite , firstname , lastname , username , address ,
     phone , price , nomprod){

    this.quantite = quantite;
    this.idpro = idpro;
    this.email = email;
    this.firstname = firstname;
    this.lastname = lastname;
    this.username = username;
    this.address = address;
    this.phone = phone;
    this.price = price;
    this.nomprod = nomprod;


   this.modal.show();
    console.log("idprrooo" + idpro)

  }


  getAllUsers(){
    this.userService.getAllUsers().subscribe(
      res => {
        this.pagedItemsB = res;
        this.setPageA(1);
      }, err=>{

      }
    )
  }

  editpass()
  {


    let data = this.addUserFormm.value;
    const email =localStorage.getItem('emailadmin');
    this.userService.updatePassword(email,data.ancienmdp,data.nvmdp).subscribe(
      res => {   
        this.toastr.success(this.translate.instant("HOME.ss133"));

      },
    err=>{
      this.toastr.error(this.translate.instant("HOME.pp3"));

    }
    );
    
  }


  getAllCommandes(){
    this.productService.getAllCommandes("confirmed").subscribe(
      res => {
        this.pagedItemsC = res;
        this.setPageB(1);
      }, err=>{

      }
    )
  }


  getAllCmds() {
 
    this.productService.getAllCommandes("confirmed").subscribe(
      res => {
        this.pagedItemsC = res;
        this.setPageB(1);
      }, err=>{

      },
       () => { if (this.cmd.length !== 0) {
         this.setPageB(1);
       }

      }
     );
  }


  getAllUserss() {
 
    this.userService.getAllUsers()
    .subscribe(     res => { this.usersList = res; },
       err => { console.log(err);
    
       },
       () => { if (this.usersList.length !== 0) {
         this.setPageA(1);
       }

      }
     );
  }


  setPageB(page: number) {


    this.ij = page;
    this.allSelected = false;
    this.boolfin = true;
    


    // get pager object from service
    this.pager = this.pagerService.getPager(this.cmd.length, page);

    // get current page of items
    this.pagedItemsC = this.cmd.slice(this.pager.startIndex, this.pager.endIndex + 1);
    const scrollToTop = window.setInterval(() => {
      const pos = window.pageYOffset;
     
  }, 8);

 
}




  setPageA(page: number) {


    this.ij = page;
    this.allSelected = false;
    this.boolfin = true;
    


    // get pager object from service
    this.pager = this.pagerService.getPager(this.usersList.length, page);

    // get current page of items
    this.pagedItemsB = this.usersList.slice(this.pager.startIndex, this.pager.endIndex + 1);
    const scrollToTop = window.setInterval(() => {
      const pos = window.pageYOffset;
     
  }, 8);

 
}



  ngOnInit() {


    
    if(window.navigator && window.navigator.userAgent.match(/android/i)  || window.navigator && window.navigator.userAgent.match(/iphone/i) || window.navigator && window.navigator.userAgent.match(/ipad/i) || window.navigator && window.navigator.userAgent.match(/blackberry/i))
    {
      
      this.router.navigate(['appli']);
  
    }


    let formmControls = {
      ancienmdp: new FormControl(),
      nvmdp: new FormControl(),
      confirmPassword: new FormControl(),
  
  
      
    }
  
    this.addUserFormm = this.fdd.group(formmControls)
  

    this.userService.getAllUsers().subscribe(
      res => {
        this.usersList = res;
      }, err=>{

      }
    )

    this.productService.getAllCommandes("confirmed").subscribe(
      res=>{
       this.cmd = res;

      },
      err=> {
      });
  
  
  }

 

hidex(){
  this.hidebx = true;
}

hideex (){
  this.hidebx = false;

  this.getAllCommandes();

}

hide (){
  this.hideb = true;
 

  
}

hideu (){
  this.hideus = true;
 

  
}

hideuu (){
  this.hideus = false;

  this.getAllUsers();
 

  
}


hideac (){
  this.hideaco = true;
 

  
}

hideacc (){
  this.hideaco = false;

  this.getAllUsers();
 

  
}

hidee (){
  this.hideb = false;

}

 

}
