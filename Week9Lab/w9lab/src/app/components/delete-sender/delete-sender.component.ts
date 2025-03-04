import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DatabaseService } from "../database.service";


@Component({
  selector: 'app-delete-sender',
  templateUrl: './delete-sender.component.html',
  styleUrls: ['./delete-sender.component.css']
})
export class DeleteSenderComponent implements OnInit {

  senderDb:any;


  constructor(private dbService: DatabaseService, private router: Router) {}

  ngOnInit():void{
    this.onGetSender();
  }




  //Delete Sender
  onDeleteSender(item: string) {
    this.dbService.deleteSender(item).subscribe(result => {
      this.onGetSender();
      this.router.navigate(["/listsender"]);
    });
  }
  onGetSender(){
    this.dbService.getSenders().subscribe((results:any)=>{
      this.senderDb=results;
    })
  }


}


