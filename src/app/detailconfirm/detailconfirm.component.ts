import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-detailconfirm',
  templateUrl: './detailconfirm.component.html',
  styleUrls: ['./detailconfirm.component.scss']
})
export class DetailconfirmComponent implements OnInit {

  @Input()
  modal: any;

  @Input()
  idpro;

  @Input()
  email

  @Input()
  quantite

  @Input()
  firstname :any;

  @Input()
  lastname : any;

  @Input()
  username : any;

  @Input()
  address : any;

  @Input()
  phone : any;

  @Input()
  price : any;

  @Input()
  nomprod : any;

  constructor() { }

  ngOnInit() {

    
    
  }

}
