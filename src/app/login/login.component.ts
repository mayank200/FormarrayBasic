import { AfterViewChecked, Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,AfterViewChecked {
  height: any = 0;

  constructor() { }

  ngOnInit(): void {
 
  }

  ngAfterViewChecked():void{
setInterval(() => {
  this.height = document.documentElement.clientHeight;
},2000);

// $(function() {
//   $('.no-click').keypress((el:any) => {
// el.preventDefault();
// return false;
//   })
// })
  }

  noclick(event:any){
    event.preventDefault();
    return false;
  }

}
