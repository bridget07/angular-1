import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public btnClick(event):void{
    alert("测试事件！"+ event.target);
    console.log(event.target)
  }
}
