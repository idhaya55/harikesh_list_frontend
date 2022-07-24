import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListService } from '../service/app.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() existing:any = null;
  @Output() dashBoard:any = new EventEmitter();
  newIndex = 0;
  mainObj:any = {
    index: 0,
    name: '',
    list: []
  }
  lists:any = '';
  create = true;
  constructor(private listApi:ListService) { }

  ngOnInit(): void {
    console.log(this.existing)
    if(this.existing !== null){
      this.create = false;
      this.getList(this.existing)
    }
    this.getAllList();
  }

  getAllList(){
    this.listApi.getAllList().subscribe((riot:any) => {
      console.log(riot.allData,'riot.allData')
      if(riot.allData.length > 0){
      let lastIndex = riot.allData.length
      this.newIndex = riot.allData[lastIndex-1].index + 1;
      }
    })
  }

  getList(index:any){
    this.listApi.getList(index).subscribe((riot:any) => {
      console.log(riot,riot.list)
      if(riot.list.length > 0){
        let obj = riot.list[0];
        this.mainObj['index'] = obj.index;
        this.mainObj['name'] = obj.name;
        this.mainObj['list'] = obj.list;
      }
    })
  }

  createList(){
    let obj = {
      index: this.newIndex,
      name: this.mainObj['name'],
      list:this.mainObj['list'],
    }
    this.listApi.createList(obj).subscribe((riot:any) => {
      this.dashBoard.emit('dashboard');
    })
  }

  updateList(){
    this.listApi.editList(this.mainObj).subscribe((riot:any) => {
      this.dashBoard.emit('dashboard');
    })
  }

  cancel(){
    this.dashBoard.emit('dashboard');
  }


  addToList(){
    this.mainObj['list'].push(this.lists);
    this.lists = '';
  }
}
