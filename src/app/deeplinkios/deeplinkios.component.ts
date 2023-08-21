import { Component, OnInit  , Input} from '@angular/core';

@Component({
  selector: 'app-deeplinkios',
  templateUrl: './deeplinkios.component.html',
  styleUrls: ['./deeplinkios.component.scss']
})
export class DeeplinkiosComponent implements OnInit {

  
  @Input()
  modal: any;


  constructor() { }

  ngOnInit() {
  }

  doClick(btn) {
    alert(`you clicked the ${btn} button`)
  }

  openApp (){


    var intent = "intent://app#Intent;package=com.mosofty.maktub;scheme=MAKTUB;end";
      window.location.href = intent;
  }

    downloadAppp(){
      window.location.href =  "https://apps.apple.com/app/id";

    }

}
