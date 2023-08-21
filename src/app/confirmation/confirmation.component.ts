import { Component, OnInit  } from '@angular/core';
import { ProductService } from '../../app/services/product.service';
import { UserService } from '../../app/services/user.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
 
  cartList : any;

  email :any;

  nom:any;
  prenom:any;
  adresse:any;
  username : any;
  tel : any;
  mail:any;


  constructor(private userService:UserService, private productService : ProductService ) { }

  ngOnInit() {


    if (this.userService.validToken() == true){

      this.email = localStorage.getItem("email")

    this.userService.getUserAfterSignin(this.email).subscribe(
      res => { 
        this.nom = res.nom;
        this.prenom = res.prenom;
        this.mail = res.mail;
        this.tel = res.tel;
        this.username = res.username ;
        this.adresse = res.adresse;

      },
      err => {

      }
    );}
    else{
      this.email = localStorage.getItem("mailpubl")
      this.userService.getUserAfterSignin(this.email).subscribe(
        res => { 
          this.nom = res.nom;
          this.prenom = res.prenom;
          this.mail = res.mail;
          this.tel = res.tel;
          this.username = res.username ;
          this.adresse = res.adresse;
        },
        err => {
  
        }
      );

    }

    this.productService.getAllUserrCarts(this.email).subscribe(
      res => { 
        this.cartList = res;
      },
      err => {
      }
    );
  }

}
