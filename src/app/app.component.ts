import { Component } from '@angular/core';

@Component({
  selector: 'mycomponent1',
  template: `<div>
                  Hello Chanti                              <hr>
                  <p [style.color]='c1'>Good Morning</p>  <hr>
                  <p [class]='c2'>Good Afternoon</p>    <hr>
                  <p [ngClass]='c2'>Good Evening</p>    <hr>
                  <span [ngStyle]='mystyles1()'>        
                      Good Night
                  </span>
                  <button (click)="i2()">close</button>

                  <span id="i1">ggggg</span>
            </div>
            <div>
            Name:<input type='text'  [(ngModel)]='myname'>  <br>
            Ur Name:{{myname}} </div>`,
            
           
            
  styles: [`div
  {
    color:green;border:1px solid red;
  }'],
  styleUrls: ['./app.component.css`],
})

export class AppComponent 
{
  c1:string="aqua";
  c2:string="s1 s2 s3";
  i1:string="commas";
  i2(){
    document.getElementById("i1").innerHTML="change tihe content";
  }
  mystyles1()
  {
    return {'color':'yellow','background-color':'pink'};
  
  }
  myname:string="vkabd";
}
