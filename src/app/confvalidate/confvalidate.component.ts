import { Component, OnInit , Input , Output, EventEmitter } from '@angular/core';
import { ProductService } from '../../app/services/product.service';


@Component({
  selector: 'app-confvalidate',
  templateUrl: './confvalidate.component.html',
  styleUrls: ['./confvalidate.component.scss']
})
export class ConfvalidateComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<any>();

  @Input()
  modal: any;

  @Input()
  idproo;

  @Input()
  emailo

  @Input()
  quantiteo

  @Input()
  firstnameo :any;

  @Input()
  lastnameo : any;

  @Input()
  usernameo : any;

  @Input()
  addresso : any;

  @Input()
  phoneo : any;

  @Input()
  priceo : any;

  @Input()
  nomprodo : any;


  booltesting = false;

  

  constructor(private productService:ProductService) {
 
   /* this.idpro = localStorage.getItem("idproconf");
    this.email = localStorage.getItem("emailconf");
    this.qte = localStorage.getItem("qteconf");
*/


   }

  ngOnInit() {
  }

  addNewItem() {
    this.productService.updateProduct(this.idproo,this.emailo, this.quantiteo ,  "confirmed").subscribe(
      res=>{
    
        const id = {"idpro":this.idproo , "email" : this.emailo}
        this.newItemEvent.emit(id);

        this.modal.hide();
       

      },
      err=> {
        
      });
  }
  

  hide()
  {
    this.modal.hide();

  }


}
