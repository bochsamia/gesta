import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-animated-arrows-button',
  templateUrl: './animated-arrows-button.component.html',
  styleUrls: ['./animated-arrows-button.component.scss']
})
export class AnimatedArrowsButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  direction = '';
  @Output('onClick')
  handleClick = new EventEmitter;

}
