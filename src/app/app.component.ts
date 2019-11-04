import { Component } from '@angular/core';
import { DataService } from './data.service';
import { map, filter, scan } from 'rxjs/operators';
 
  import { from } from 'rxjs';
import { Bank } from './BankModule';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bank Branches';
  DataList:Bank[]=[];
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

    if(localStorage.getItem(value) == null){
        
    

    this.dataService.sendGetRequest(value).subscribe((data: any[])=>{
 console.log("RESPONSE  ",data);
 console.log("Length",data.length);
// this.DataList=data.map((data) => {
//   return {
//     fav:false,
//     ifsc:data.ifsc,
//     bank_id:data.bank_id,
//     branch:data.branch,
//     address:data.address,
//     city:data.city,
//     district:data.district,
//     state:data.state,
//     bank_name:data.bank_name
//   };
  
// });
this.DataList = [];
data.forEach((dataElem) => {
  dataElem.fav = false;
   this.DataList.push(dataElem);
});

localStorage.setItem(value,JSON.stringify(this.DataList));


}
)
    }
    else{
        this.DataList  = JSON.parse(localStorage.getItem(value));
    }
}



fav(data:Bank){
  let city = "";
  this.DataList.forEach((elem)=>{
    if(elem.ifsc == data.ifsc && elem.fav == false){
      city = elem.city;
        elem.fav = true;
    }
    else if(elem.ifsc == data.ifsc && elem.fav == true)
    {
      city=elem.city;
      elem.fav=false;
    }
  })
  localStorage.setItem(city,JSON.stringify(this.DataList));
}

}  


