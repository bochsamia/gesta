import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input()
  component : any;

  constructor() { }

  ngOnInit() {
  }

  scrolling()
  {

    window.setTimeout(() => {
      window.scrollTo(0, 4450);
  }, 500);
    

  }

  scrollingg()
  {
    window.scrollTo(0, 0);

  }

}
