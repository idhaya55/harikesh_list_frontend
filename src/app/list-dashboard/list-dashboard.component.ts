import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ListService } from '../service/app.service';

@Component({
  selector: 'app-list-dashboard',
  templateUrl: './list-dashboard.component.html',
  styleUrls: ['./list-dashboard.component.css']
})
export class ListDashboardComponent implements OnInit {
  allList:any = [{index:'1',name:'Home List'}];
  @Output() createNew = new EventEmitter();
  constructor(private listApi:ListService) { }

  ngOnInit(): void {
    this.getallList()
  }


  getallList(){
    this.listApi.getAllList().subscribe((list:any) =>{
      this.allList = list.allData;
      console.log(list,'list')
    } )
  }

  newList(){
       this.createNew.emit('new')
  }

  existingList(i:any){
    let obj:any = {index:i}
    this.createNew.emit(obj)
  }

  delete(index:any){
    console.log(index,'delete')
   this.listApi.deleteList(index).subscribe((rio:any) => {
     this.allList = rio.list;
   })  
  }
}
