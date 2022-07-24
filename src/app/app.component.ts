import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'list-app';
  public existingTab:any = 'dashboard'
  index = null;

  createList(event:any){
    console.log(event)
    if(event == 'new'){
      this.existingTab = 'create';
      this.index = null;
    }
    else if(event == 'dashboard'){
      this.existingTab = 'dashboard';
      this.index = null;
    }
    else{
      this.existingTab = 'create';
      this.index = event.index;
      console.log(this.index)
    }
    
  }
}
