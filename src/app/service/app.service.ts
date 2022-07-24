import { Injectable } from "@angular/core"
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
  
  export class ListService {
    constructor(private http: HttpClient){}

    getAllList(){
        return this.http.get("http://localhost:8088/get/all")
    }
    getList(index:any){
        return this.http.get(`http://localhost:8088/get/list/${index}`)
    }
    createList(body:any){
        return this.http.post(`http://localhost:8088/create/list`,body)
    }
    editList(body:any){
        return this.http.put(`http://localhost:8088/update/list`,body)
    }
    deleteList(index:any){
        return this.http.delete(`http://localhost:8088/delete/list/${index}`)
    }
  }