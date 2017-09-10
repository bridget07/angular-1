import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-template-interporation',
  templateUrl: './template-interporation.component.html',
  styleUrls: ['./template-interporation.component.scss']
})
export class TemplateInterporationComponent implements OnInit {
  public gameTile: string="gkuddd";
  constructor() { }

  ngOnInit() {
  }

  public getName(): string{
    return "aaagukd";
  }
}
