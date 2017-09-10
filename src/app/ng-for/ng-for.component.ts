import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {
  public races:Array<any>=[
    {name:11111111111},
    {name:22222222222},
    {name:3333}
  ]
  constructor() { }

  ngOnInit() {
  }

}
