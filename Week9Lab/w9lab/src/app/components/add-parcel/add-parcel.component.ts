import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DatabaseService } from "../database.service";


@Component({
  selector: 'app-add-parcel',
  templateUrl: './add-parcel.component.html',
  styleUrls: ['./add-parcel.component.css']
})
export class AddParcelComponent implements OnInit {

  constructor(private dbService: DatabaseService, private router: Router) {}

  ngOnInit(): void {
  }

  address="";
  weight=0;
  fragile="";
  id="";

  onSaveParcel(){
    let parcel={"senderId":this.id, "parcel":{
      "address":this.address, "weight":this.weight, "fragile":this.fragile
    }}
    this.dbService.addParcel(parcel).subscribe(result=>{
      this.router.navigate(["/listparcel"])

    })
  }


}
