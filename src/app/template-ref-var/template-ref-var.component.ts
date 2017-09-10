import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-template-ref-var',
  templateUrl: './template-ref-var.component.html',
  styleUrls: ['./template-ref-var.component.scss']
})
export class TemplateRefVarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public sayHello(name:string):void{
    console.log("name", name);
  }
}
