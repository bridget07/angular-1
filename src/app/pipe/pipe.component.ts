import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {
  public currentTime: Date=new Date();

  constructor() { }

  ngOnInit() {
    window.setInterval(()=>{
      this.currentTime=new Date(),1000
    })
  }

}
