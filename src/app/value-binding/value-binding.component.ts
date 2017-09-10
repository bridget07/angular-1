import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-value-binding',
  templateUrl: './value-binding.component.html',
  styleUrls: ['./value-binding.component.scss']
})
export class ValueBindingComponent implements OnInit {
  public imgSrc:string="./assets/imgs/1.jpg";
  constructor() { }

  ngOnInit() {
  }

  public changeSrc():void{
    if(Math.ceil(Math.random()*10)%2){
      this.imgSrc="./assets/imgs/1.jpg";
    }else{
      this.imgSrc="./assets/imgs/2.jpg";

    }
  }
}
