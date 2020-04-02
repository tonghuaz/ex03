import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string;
  imgUrl:string;
  url:string
  constructor(){
    this.title = 'hello'
    this.imgUrl = 'https://i0.hdslb.com/bfs/album/b769f62b2f0fc31cad67d1528601a8e1e63d0cc8.jpg';
    this.url = 'https://www.baidu.com/'
  }

  onBtnClicked(){
    console.log('lalala!')
  }
  onInput(evt:Event){
    this.title = (<HTMLInputElement>evt.target).value
  }
}
