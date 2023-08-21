import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-search-produit',
  templateUrl: './search-produit.component.html',
  styleUrls: ['./search-produit.component.scss']
})
export class SearchProduitComponent implements OnInit {

  @Output()
  searchListen = new EventEmitter<String>();
  searchText: any;

  

  constructor(private translate : TranslateService) { }

  ngOnInit() {
  }


  changeit() {
    this.searchListen.emit(this.searchText);
  }
}
