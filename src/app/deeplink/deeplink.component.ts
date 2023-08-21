import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-deeplink',
  templateUrl: './deeplink.component.html',
  styleUrls: ['./deeplink.component.scss']
})
export class DeeplinkComponent implements OnInit {

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
      window.location.href =  "https://play.google.com/store/apps/details?id=packagename";

    }

}
