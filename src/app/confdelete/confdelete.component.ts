import { Input, Component, OnInit , Output , EventEmitter } from '@angular/core';
import { ProductService } from '../../app/services/product.service';


@Component({
  selector: 'app-confdelete',
  templateUrl: './confdelete.component.html',
  styleUrls: ['./confdelete.component.scss']
})
export class ConfdeleteComponent implements OnInit {

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


  constructor(private productService : ProductService) { 

    
  }

  ngOnInit() {
  }

  hide()
  {
    this.modal.hide();

  }


  refuseProduct(){

    this.productService.updateProduct(this.idproo,this.emailo,this.quantiteo ,"refused").subscribe(
      res=>{
        const id = {"idpro":this.idproo , "email" : this.emailo}
        this.newItemEvent.emit(id);

        this.modal.hide();
        this.ngOnInit();
    
      },
      err=> {
      });
  
  }

}
