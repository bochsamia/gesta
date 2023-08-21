import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-valid',
  templateUrl: './valid.component.html',
  styleUrls: ['./valid.component.scss']
})
export class ValidComponent implements OnInit {

  @Input()
  component: string;
  @Input()
  modal: any;
  constructor() { }

  ngOnInit() {
  }

}
