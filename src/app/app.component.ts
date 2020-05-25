import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'platzi-store';
  abraham = 'EL abraham esta bien meco';
  items = ['eduardo', 'maria', 'Jose' ];
    addItem(){
    this.items.push('nuevo item');
  }

  deleteItem(index: number){
    this.items.splice(index, 1);

  }

  }
