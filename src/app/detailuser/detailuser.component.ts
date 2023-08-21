import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-detailuser',
  templateUrl: './detailuser.component.html',
  styleUrls: ['./detailuser.component.scss']
})
export class DetailuserComponent implements OnInit {

  @Input()
  modal: any;

  @Input()
  email : any;

  @Input()
  firstname: any;

  @Input()
  lastname: any;

  @Input()
  username: any;

  @Input()
  address: any;

  @Input()
  phone: any;

  @Input()
  fonction: any;

  @Input()
  pic: any;

  picture: any;

  @Input()
  about: any;

  @Input()
  couverture: any;

  constructor() { }

  ngOnInit() {
 
  }

}
