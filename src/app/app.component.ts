import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Fischer-Angular-Charts';
  employees = [
    {'name': 'Fazt', position: 'Manager', email:'email@email.com'},
    {'name': 'Juan', position: 'Designer', email:'email@email.com'},
    {'name': 'Pedro', position: 'Programmer', email:'email@email.com'}
  ];

  model:any = {};
  model2:any = {};
  myValue: any;
  msg:string = '';
  hideUpdateForm:boolean = true;

  // Chart DNA Content
  // var ctx = document.getElementById('dnaContentChart');



addEmployee():void{

  this.employees.push(this.model);
  this.msg = 'User created';

}

deleteEmployee(i :number):void{

  var answer = confirm('You want to eliminate this data?');
  if(answer){
    console.log(i);
    this.employees.splice(i, 1);
    this.msg = 'User eliminated';
  }

}

editEmployee(i: number):void{

  this.hideUpdateForm = false;
  this.model2.name = this.employees[i].name;
  this.model2.position = this.employees[i].position;
  this.model2.email = this.employees[i].email;
  this.myValue = i;
  console.log(i);
}

updateEmployee():void{
  let i = this.myValue;
  for(let j = 0; j < this.employees.length; j++){

    if( i == j){
      this.employees[i] = this.model2;
      this.msg = 'User Update'
      this.model2 = {};
      this.hideUpdateForm = true;
    }
  }
}

closeAlert():void{
  this.msg = '';
}

}
