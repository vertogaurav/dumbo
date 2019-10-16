import { Component } from '@angular/core';
import { DataService } from './data.service';
import { map, filter, scan } from 'rxjs/operators';
 
  import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bank Branches';
  DataList:any;
  page:any;
  p:any;
  filter:any;
  constructor(private dataService: DataService) { }
  ngOnInit() {
   this.getDetails(event);
   this.getpage(event);
   this.page=10;
   this.p=this.p;
   this.filter=this.filter;
  }

  // noofpage(value){

  // }
  getpage(value){
 this.page=value;
  }
  getDetails(value){ 
    this.dataService.sendGetRequest(value).subscribe((data: any[])=>{
 console.log("RESPONSE  ",data);
 console.log("Length",data.length);
this.DataList=data.map((data) => {
  return {
    ifsc:data.ifsc,
    bank_id:data.bank_id,
    branch:data.branch,
    address:data.address,
    city:data.city,
    district:data.district,
    state:data.state,
    bank_name:data.bank_name
  };
});
 
})  
}

}
  

