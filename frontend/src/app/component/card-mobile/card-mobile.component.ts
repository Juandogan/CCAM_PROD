import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-mobile',
  templateUrl: './card-mobile.component.html',
  styleUrls: ['./card-mobile.component.css']
})
export class CardMobileComponent implements OnInit {

  @Input('data') data: any;


  constructor() { }

  ngOnInit(): void {
  }

}
