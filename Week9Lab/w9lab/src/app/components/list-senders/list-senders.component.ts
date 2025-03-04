import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DatabaseService } from "../database.service";

@Component({
  selector: 'app-list-senders',
  templateUrl: './list-senders.component.html',
  styleUrls: ['./list-senders.component.css']
})
export class ListSendersComponent implements OnInit {
  senderDb:any;

  constructor(private dbService: DatabaseService, private router: Router) {}

  ngOnInit() {

    this.dbService.getSenders().subscribe((data => {
      this.senderDb = data;
    }));
  }
    
  }
  




