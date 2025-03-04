import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DatabaseService } from "../database.service";

@Component({
  selector: 'app-list-parcels',
  templateUrl: './list-parcels.component.html',
  styleUrls: ['./list-parcels.component.css']
})
export class ListParcelsComponent implements OnInit {

  parcelDb:any;

  constructor(private dbService: DatabaseService, private router: Router) {}

  ngOnInit() {

    this.dbService.getParcels().subscribe(data=>{
      this.parcelDb=data;
    })
  }
    
  }
